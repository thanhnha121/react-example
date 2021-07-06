const express = require('express')
var cors = require('cors')
const app = express()
const port = 30000

app.use(cors())

app.get('/get_shirts', (req, res) => {
    res.json({
        status: 1,
        data: [
            {
                image: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/1fca7cdf9fb44f9b8930ac3d00710b09_9366/Camo_Polo_Shirt_Blue_GM0258_21_model.jpg",
                name: "Áo polo",
                color: "Đỏ",
                size: "XL",
                price: "200000"
            },
            {
                image: "https://cf.shopee.vn/file/2f310645e76c73573892c75a7eda5ba6",
                name: "ÁO POLO VẢI PIQUE GO-TO PRIMEGREEN",
                color: "Đỏ",
                size: "XL",
                price: "500000"
            },
            {
                image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/2f39a839c80b46ae9524ac3d008b1420_9366/Ao_polo_vai_pique_Go-To_Primegreen_Mau_xanh_da_troi_GS9473_21_model.jpg",
                name: "[FLASH SALE] ÁO THUN POLO NAM 100% COTTON CHẤT ĐẸP, ÁO PHÔNG POLO NAM CỔ VIỀN",
                color: "Đỏ",
                size: "XLL",
                price: "300000"
            },
        ]
    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})