// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword  } from "firebase/auth";
import { collection, addDoc,getFirestore , getDocs,getDoc,doc, setDoc, updateDoc } from "firebase/firestore"; 
import { getStorage, ref, uploadBytes ,getDownloadURL } from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwvu9yiuZ2FrlNBMwYSPajHCQoLPkOeGs",
  authDomain: "olxloginsignup.firebaseapp.com",
  projectId: "olxloginsignup",
  storageBucket: "olxloginsignup.appspot.com",
  messagingSenderId: "197422948256",
  appId: "1:197422948256:web:418773853af0f49c890ec5",
  measurementId: "G-MF0H38YVNX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);

// let uid;
export async function Register(si){
  try{
    const {name, email, password, image, address} = si
    const authResult =  await createUserWithEmailAndPassword(auth, email, password)
    const user = authResult.user;
    const storageRef = ref(storage, `users/${image.name}`);
    await uploadBytes(storageRef, image);
    const url = await getDownloadURL(storageRef);
    await setDoc(doc(db, "users", user.uid), {
      name,
      profilePic: url,
      address
    });
    alert("User Registered")
    //  uid = user.uid
  }catch(e){
    const errorMessage = e.message;
    alert(errorMessage)
  }
}
export async function SignIn(si){
  try{
    const {email, password} = si
    await signInWithEmailAndPassword(auth, email, password)
    alert("User login SuccessFully")
    return true
  }catch(e){
    const errorMessage = e.message;
      alert(errorMessage)
  }
  
}

export async function AddProduct(prod) {
  try {
    const imagesUrls = [];
    const { name, price, des, stock, brand, images } = prod;

    for (const image of images) {
      const storageRef = ref(storage, `prods/${image.name}`);
      await uploadBytes(storageRef, image);
      const url = await getDownloadURL(storageRef);
      imagesUrls.push(url);
    }

    alert("Image uploaded successfully");

    await addDoc(collection(db, "products"), {
      name,
      price,
      description: des,
      stock,
      brand,
      imagess: imagesUrls,
    });

    alert("Product added successfully");
  } catch (e) {
    alert(e.message);
  }
}


export async function getProduct(){
    const ads = []
    const querySnapshot = await getDocs(collection(db, "products"));
    querySnapshot.forEach((doc) => {
      const ad = doc.data()
      ad.id = doc.id
      ads.push(ad)
    });

    return ads
}

export async function getProductDetails(id){
  const docRef = doc(db, "products", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data()
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }
}

export async function getUserDetails(uid){
  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data()
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }
}


export async function UpdateProfile(prod) {
  try {

    const { namee,address ,updateDP, userr } = prod;
    const washingtonRef = doc(db, "users", userr.uid);

      const storageRef = ref(storage, `users/${updateDP.name}`);
      await uploadBytes(storageRef, updateDP);
      const url = await getDownloadURL(storageRef);


    alert("Image uploaded successfully");

    await updateDoc(washingtonRef, {
     name: namee,
      address,
      profilePic: url,
    });

    alert("user updated successfully");
  } catch (e) {
    alert(e.message);
  }
}