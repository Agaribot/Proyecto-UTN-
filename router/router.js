const {Router}= require ("express");
const router= new Router();
const mysql = require('mysql');

// Conexión a base de datos
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'garibotto_andrea'
})
    
conn.connect((err) => {
    if (err) throw err;
    console.log('Conexión establecida.')
});
      
  // Rutas

  router.get("/home", (req, res)=>{ 
   res.render("home")
  })   
  
  router.get("/proyectos", (req, res)=>{ 
    res.render("proyectos")
   }) 

   

 
    // Mostrar
    router.get('/', (req, res) => {
        let sql = "SELECT * FROM cliente";
        let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.render('cliente', {
            results: results
        });
      });
    });

// Insertar       
router.post('/save',(req, res) => {
    let data = {nombre: req.body.nombre, apellido: req.body.apellido, telefono: req.body.telefono, email: req.body.email};
    let sql = "INSERT INTO cliente SET ?";
    let query = conn.query(sql, data,(err, results) => {
        if(err) throw err;
        res.redirect('/');
    });
  });

        
// Actualizar      
router.post('/update', (req, res) => {
    let sql = "UPDATE cliente SET nombre='" + req.body.nombre + "', apellido='" + req.body.apellido + "', telefono='" + req.body.telefono + "', email='" + req.body.email + "' WHERE id_c ='" + req.body.id +"' ";
    let query = conn.query(sql, (err, results) => {
    if (err) throw err;
        res.redirect('/');
    });
});

// Eliminar 
router.post('/delete', (req, res) => {
    let sql="DELETE FROM cliente WHERE id_c =" + req.body.id_c + "";  
    let query = conn.query(sql,(err, results) => {
        if (err) throw err;
        res.redirect('/');
    });
});   
     

module.exports = router;
     

    