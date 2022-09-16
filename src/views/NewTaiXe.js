import {useState, useEffect} from 'react'
import {useParams, useNavigate} from "react-router-dom"
import '../assets/css/newtaixe.css'
const EditTaiXe = () => {
    const initialFormState= {
        ten: '',
        cmt: '',
        maSoBangLai: '',
        loaiBangLai: '',
        diaChi: '',
        ngaySinh: '',
        thamNien: '',
        luongId:'1'
    }
    const [taiXe, setTaiXe] = useState(initialFormState)
    const [bacLuong, setBacLuong] = useState([])
    const navigate = useNavigate()

    useEffect(() =>{
        fetch(`http://localhost:8081/api/bacluong`)
        .then(res => res.json())
        .then(data => {
            setBacLuong(data)
        })
    },[])

    const handleChange = (event) => {
        const {name, value} = event.target
        setTaiXe({...taiXe, [name] : value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`http://localhost:8081/api/taixe`,{
            method : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(taiXe)
        })
        .then(res => res.json)
        .then( res =>{
            navigate("/")
            
        }
                
        )
        .catch(
            (error) => {
                console.error('Error:', error)
            }
        )
        e.preventDefault()
    }
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
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Họ tên</td>
                                        <td><input type="text" required="required" onChange={(e)=> handleChange(e)} name="ten"/> </td>
                                    </tr>
                                    <tr>
                                        <td>Mã bằng lái</td>
                                        <td><input type="text" required="required" name="maSoBangLai" onChange={(e)=> handleChange(e)}/></td>
                                    </tr>
                                    <tr>
                                        <td>Loại bằng lái:</td>
                                        <td><input type="text" required="required" name="loaiBangLai" onChange={(e)=> handleChange(e)}/></td>
                                    </tr>
                                    <tr>
                                        <td>Địa chỉ</td>
                                        <td><input type="text" required="required" name="diaChi" onChange={(e)=> handleChange(e)}/></td>
                                    </tr>
                                    <tr>
                                        <td>Ngày sinh</td>
                                        <td><input type="date" required="required" name="ngaySinh" onChange={(e)=> handleChange(e)} /></td>
                                    </tr>
                                    <tr>
                                        <td>Thâm niên</td>
                                        <td><input type="number" min={0} required="required" name="thamNien" onChange={(e)=> handleChange(e)}/></td>
                                    </tr>
                                    <tr>
                                        <td>Bậc lương</td>
                                        <td>
                                            <select name="luongId" onChange={(e)=> handleChange(e)}>
                                                {
                                                    bacLuong.map((luong) => {
                                                        return <option key = {luong.id} value={luong.id}> {luong.heSoLuong} </option>
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