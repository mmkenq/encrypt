window.onload = function(){
    console.log(document.getElementById('encrypt_input') );
    document.getElementById('encrypt_input').addEventListener('keyup', (ev)=>{
        let encrypted_message = encrypt(ev.target.value); // data
        document.getElementById('encrypted_input').value = encrypted_message;
    });


    function encrypt(message){
        console.log(message);
        return 'encrypted';
    }
}




