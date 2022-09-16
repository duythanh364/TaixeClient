import {useState, useEffect } from 'react'
import {useParams, useNavigate, Navigate } from "react-router-dom"
import '../assets/css/taixeEdit.css'
const EditTaiXe = () => {
    const initialFormState= {
        ten: '',
        cmt: '',
        maSoBangLai: '',
        loaiBangLai: '',
        diaChi: '',
        ngaySinh: '',
        thamNien: '',
        luongId: ''
    }
    const [taiXe, setTaiXe] = useState(initialFormState)
    const [bacLuong, setBacLuong] = useState([])
    const [loading, setLoading] = useState(false)
    const [update, setUpdate] = useState(false)
    const { id } = useParams()
    const navigate= useNavigate()
    useEffect(() =>{
        setLoading(true)
        fetch(`http://localhost:8081/api/taixe/${id}`)
        .then(res => res.json())
        .then(data => {
            setTaiXe({
                ten: data.ten,
                cmt: data.cmt,
                maSoBangLai: data.maSoBangLai,
                loaiBangLai: data.loaiBangLai,
                diaChi: data.diaChi,
                ngaySinh: data.ngaySinh,
                thamNien: data.thamNien,
                luongId: data.luong.id
                })
            setLoading(false)
        })
        .catch((error) => {
            console.error('Error:', error);})
    },[])

    useEffect(() =>{
        fetch(`http://localhost:8081/api/bacluong`)
        .then(res => res.json())
        .then(data => {
            setBacLuong(data)
        })
        .catch((error) => {
            console.error('Error:', error);})
    },[])

    const handleChange = (event) => {
        const {name, value} = event.target
        console.log(name,value)
        setTaiXe({...taiXe, [name] : value})
    }
    const handleSubmit = (event) => {
        event.preventDefault()
   
        fetch(`http://localhost:8081/api/taixe/${id}`,{
            method : 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(taiXe)
        })
        .then(res => {
            
            return (res.json());
            
        })
        .then(
            res =>{
                
                // () =>  <Navigate to="/" replace={true} />
                navigate('/')
            }
            
        )
        .catch(
            (error) => {

                console.error('Error:', error)
            }
        )
        event.preventDefault()
    }
    if(loading) return <p style={{fontFamily: "Segoe UI",
                                  fontSize: "40px",
                                  fontWeight: "500", 
                                  paddingLeft: "600px"}}
                        > 
                        Loading Data........
                        </p>
    return (<div className="insert">
                <div className="container">
                    <div className="wrapper">
                        <span className="title">Cập nhật thông tin tài xế</span>
                        <form>
                            <div className="table__content">
                                <table>                                 
                                    <tr>
                                        <td>CMT</td>
                                        <td><input type="text" maxLength="12" minLength="12" required="required" 
                                                onChange={(e)=> handleChange(e)}
                                                name="cmt"
                                                value={taiXe.cmt}  /></td>
                                    </tr>
                                    <tr>
                                        <td>Họ tên</td>
                                        <td><input type="text" required="required" onChange={(e)=> handleChange(e)} name="ten" value= {taiXe.ten} /> </td>
                                    </tr>
                                    <tr>
                                        <td>Mã bằng lái</td>
                                        <td><input type="text" required="required" value= {taiXe.maSoBangLai} name="maSoBangLai" onChange={(e)=> handleChange(e)}/></td>
                                    </tr>
                                    <tr>
                                        <td>Loại bằng lái:</td>
                                        <td><input type="text" required="required" value= {taiXe.loaiBangLai} name="loaiBangLai" onChange={(e)=> handleChange(e)}/></td>
                                    </tr>
                                    <tr>
                                        <td>Địa chỉ</td>
                                        <td><input type="text" required="required" value= {taiXe.diaChi} name="diaChi" onChange={(e)=> handleChange(e)}/></td>
                                    </tr>
                                    <tr>
                                        <td>Ngày sinh</td>
                                        <td><input type="date" required="required" value= {taiXe.ngaySinh} name="ngaySinh" onChange={(e)=> handleChange(e)} /></td>
                                    </tr>
                                    <tr>
                                        <td>Thâm niên</td>
                                        <td><input type="number" min={0} required="required" value={taiXe.thamNien} name="thamNien" onChange={(e)=> handleChange(e)}/></td>
                                    </tr>
                                    <tr>
                                        <td>Bậc lương</td>
                                        <td>
                                            <select name="luongId" value={taiXe.luongId} onChange={(e)=> handleChange(e)}>
                                                {
                                                    bacLuong.map((luongg) => {
                                                        return luongg.id==taiXe.luongId ? 
                                                        <option key = {luongg.id} value={luongg.id} selected>  {luongg.heSoLuong}</option> :
                                                        <option key = {luongg.id} value={luongg.id}> {luongg.heSoLuong}</option>
                                                    }) 
                                                }
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td><span className="button"><button type="submit" onClick={(e) => handleSubmit(e)}>Lưu</button></span></td>
                                    </tr>
                                </table>
                            </div>
                        </form>
                    </div>
            </div>
        </div>)
}
 
export default EditTaiXe;