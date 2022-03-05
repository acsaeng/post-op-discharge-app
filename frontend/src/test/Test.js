import { React, useState } from 'react'
import axios from 'axios';

const Test = () => {
    const [isLoading, setIsLoading] = useState(true);
    
    // const [blobImage, setBlobImage] = useState(new Blob());
    const [base64Image, setBase64Image] = useState("");

    function getImage() {
        if (isLoading === true) {
            axios.get('http://localhost:8081/photos/1').then(
                res => {
                    let arraybuffer = res.data.photo;
                    convertBase64(arraybuffer);
                })
                setIsLoading(false);
        }
    };

    const uploadImage = async (blobImage) => {
        const base64 = await convertBase64(blobImage);
        console.log(base64);
        setBase64Image(base64);
    };

    // const convertBase64 = (file) => {
    //     return new Promise( (resolve, reject) => {
    //         const fileReader = new FileReader();
    //         fileReader.readAsDataURL(file);

    //         fileReader.onload = () => {
    //             resolve(fileReader.result);
    //         };

    //         fileReader.onerror = (error) => {
    //             reject(error);
    //         };
    //     })
    // };

    const convertBase64 = (arraybuffer) => {
            let binary = '';
            let bytes = new Uint8Array(arraybuffer);
            
            for (let i = 0; i < bytes.byteLength; i++) {
                binary += String.fromCharCode(bytes[i]);
            }

            setBase64Image(window.btoa(binary));
            console.log(setBase64Image);
    };

    getImage();
  
    return (
    <div>
        {/* <input type="file" onChange={(e) => {
            uploadImage(e);
        }} /> */}

        <br />

        <img src={base64Image} alt="" height="200px" />

    </div>
  )
}

export default Test