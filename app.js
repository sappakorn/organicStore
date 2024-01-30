const express = require("express");
/* const { create, result } = require("lodash"); */
const app = express();
const port = 3020;
const pgp = require("pg-promise")();
const db = pgp("postgres://webadmin:CANhfo43324@10.104.13.219:5432/myDB"); //เชื่อมต่อฐานข้อมูล
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const { errors } = require("pg-promise");
const flash = require('connect-flash');
app.use(express.urlencoded({ extended: true }));



app.set("view engine","ejs"); //เซ็ทเพื่อใช้EJSเป็นtemplate engine

//ถ้ามีรีเควสมาด้วย / จะเข้าหน้าแรก คือ index.ejs
app.get("/",(req,res)=>{ 
  res.render('pages/index.ejs',{
  })
})

app.get('/products',(req,res)=>{
  db.any("select * from products") //เรียกข้อมูลทั้งหมดของตารางสินค้า
    .then((data1) => {
      myProduct = data1;
      res.render('pages/products.ejs',{
        myProduct: myProduct
        }) 
    })
    .catch((error1) => {
      return res.status(400).json(error1);
    }); 
})

app.get('/register',(req,res)=>{
  db.any("select * from users").then((user)=>{
    usertable = user;
    res.render('pages/register', {
      usertable : usertable
    })
  }).catch((err)=>{
    return res.status(400).json(err)
  })
})



app.listen(port, () => {
  //เช็คว่าถ้ามีการเชื่อมต่อพอร์ทนี้จะแสดงผลข้างล่าง
  console.log("Hello running at port 3020");
}); 

app.post('/auth/register', async (req, res) => {
    // ดึงข้อมูลจาก body ของ request
  const password = req.body.password;
  const username = req.body.username;
  const fname = req.body.fname;
  const lname = req.body.lname;
  const phone = req.body.fname;
  // เข้ารหัสรหัสผ่านด้วย bcrypt
  const hashedPassword = await bcrypt.hash(password, 10);
  



  db.any('SELECT username FROM public.users WHERE username = $1;', [username]).then((data_user)=>{
    if(data_user.length>0){
      console.log('มีชื่อผู้ใช้นี้แล้ว กรุณาตั้งชื่อใหม่');
    }else{
      try {
        
        db.none(`INSERT INTO public.users(username,userpass, fname, lname, phone) VALUES ('${username}', '${hashedPassword}', '${fname}', '${lname}', '${phone}');`)
          .then((result) => {
            res.redirect('/');
          })
          .catch((errors) => {
            res.status(500).send('Error'+errors);
          });
    
      } catch (error) {
        res.status(500).send('Error creating user'+error);
        
      }
    }
  }).catch((errors)=>{
    console.log('กรุณาตรวจสอบการเชื่อมอินเทอร์เน็ต');
  })
  
});

// ...

// ...

app.post('/auth/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.any('SELECT id, username, userpass, fname, lname, phone FROM public.users WHERE username = $1;', [username])
  .then((data_user) => {
    if (data_user.length > 0) {
      const user = data_user[0];
      bcrypt.compare(password, user.userpass, (err, result) => {
        if (result) {
          res.redirect('/products')
        } else {
          res.redirect('/')
          console.log('รหัสผ่านไม่ถูกต้อง');
        }
      });
    } else {
      console.log('ไม่พบผู้ใช้งาน');
    }
  })
  .catch((error) => {
    console.error('เกิดข้อผิดพลาดในการเข้าสู่ระบบ:', error);
  });

  
  

  

});

// ...

// ...


/* productRouter.route("/").get((req,res)=>{
  db.any("select * from products")
    .then((data1) => {
      res.render('products', { data1: data1 });
    })
    .catch((error1) => {
      return res.status(400).json(error1);
    });
}); */

/* 
app.use("/products", productRouter) */

