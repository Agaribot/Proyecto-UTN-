const {Router}= require ("express");
const nodemailer = require ("nodemailer");
const contacto= new Router();


// envío de e-mail

contacto.get("/contacto" , (req, res) =>{
    res.render("contacto");
})



//Guardo en una cte. lo que ingresa el ususario

contacto.post("/send-email", (req, res)=>{
    const nombre= req.body.nombre;
    const apellido= req.body.apellido;
    const email= req.body.email; // 
    const telefono= req.body.telefono;
    const mensaje= req.body.mensaje;

    //instancio variables de entorno de .env

    let transporter = nodemailer.createTransport({ 
        host:process.env.SMTP_HOST ,
        port:process.env.SMTP_PORT ,        
        secure: false,
        auth:{
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },

    });

    // Utilizo la info para construír un objeto

    let mailOptions= {
        to: "consultas@miapp.com",
        from:"Remitente",
        html: `<h1>Mensaje de ${nombre} ${apellido} para MiApp: ${mensaje}.
        Contacto: ${email}
        Número de contacto: ${telefono}</h1>`,   // mensaje

    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error){
        res.status(500).send(error.message);
    }else{
        res.render('enviado');
        res.status(200).jsonp(reqbody);

    }
  });
});




module.exports = contacto;