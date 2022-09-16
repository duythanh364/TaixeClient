import {useState, useEffect, useRef} from 'react'
import React from 'react';
import ReactDOM from 'react-dom/client';
import NavBar from '../component/navbar/NavBar'
import '../assets/css/taixe.css'
import {Link,useNavigate} from 'react-router-dom'

const ListTaiXe = () => {
    const [drivers, setDrivers] = useState([])
    const [loading, setLoading] = useState(false)
    const [searchType, setSearchType] = useState("ten")
    const [keyword, setKeyword] = useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate()


    useEffect(() =>{
        setLoading(true)
        fetch('http://localhost:8081/api/taixe')
            .then( res => {
            return res.json()})
            .then( data => {
                console.log("ahihi")
                console.log(data)
                setDrivers(data)
                setLoading(false)
            })
    },[])

    const freshHandle = (e) => {
        e.preventDefault()
        setLoading(true)
        fetch('http://localhost:8081/api/taixe')
            .then( res => {
            return res.json()})
            .then( data => {
                setDrivers(data)
                setError("")
                setLoading(false)
            }
        )
    }
    const deleteHandle = (id) =>{
        fetch(`http://localhost:8081/api/taixe/${id}`,{
            method: 'DELETE', 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(data => {
            let listUpdate= [...drivers].filter( i => i.id != id);
            setDrivers(listUpdate)
        })
    }

    const handleSortChange = (e) => {
        if(drivers){
            switch (e.target.value){
                case "ten":
                    drivers.sort((a,b) => {
                        let aSplit = a.ten.split(' ')
                        let bSplit = b.ten.split(' ')
                        return aSplit[aSplit.length-1] > bSplit[bSplit.length-1] ? 1 : -1
                    })
                    setDrivers([...drivers])
                    break;
                case "thamNien":
                    drivers.sort((a,b) => {
                        return b.thamNien - a.thamNien
                    })
                    setDrivers([...drivers])
                    break;
                default:

            }
        }
    }
   
    const handleSearchSubmit = (e) => {
        
        if(drivers){
            switch (searchType){
                case "ten":
                    let searchList1 = drivers.filter( driver => driver.ten.toUpperCase().includes(keyword.toUpperCase())||
                                                                driver.ten.toLowerCase().includes(keyword.toLowerCase()))
                    console.log("tu khoa" + keyword)
                    console.log("do dai danh sach "+searchList1.length)

                    if(searchList1.length == 0) {
                        setError("Không tìm thấy tên yêu cầu")
                        
                    } else{
                        setDrivers(searchList1)
                    }
                    
                    break;
                case "cmt":
                    let searchList2 = drivers.filter( driver => driver.cmt.includes(keyword))
                    if(searchList2.length == 0) {
                        setError("Không tìm thấy chứng minh thư yêu cầu")
                        
                    } else{
                        setDrivers(searchList2)
                    }
                    break;
                case "diaChi":
                    console.log(drivers[0])
                    let searchList3 = drivers.filter( driver => driver.diaChi.toUpperCase().includes(keyword)||
                                                                driver.diaChi.toLowerCase().includes(keyword))
                    if(searchList3.length == 0) {
                        setError("Không tìm thấy địa chỉ yêu cầu")
                        
                    } else{
                        setDrivers(searchList3)
                    }
                    break;
            }
        }
        e.preventDefault()
    }

    if(loading) return <p style={{fontFamily: "Segoe UI",
                                  fontSize: "40px",
                                  fontWeight: "500", 
                                  paddingLeft: "600px"}}
                        > 
                        Loading Data.......
                        </p>

    return (
            <div className="insert">
                
                <div className="container">
                <div className="wrapper">
                    <a className="title">Danh sách tài xế</a>
                    <p class="error"
                    style={{color:"#ff0026",
                    fontFamily: "Segoe UI",
                    fontSize: "20px",
                    fontWeight: "600"
                    
                    }}>
                        {error}
                    </p>
                    <form className="search">
                        
                        <select name="search_type" value={searchType} onChange={(e) => setSearchType(e.target.value)}>
                            <option value="ten">Tên</option>
                            <option value="cmt">CMT</option>
                            <option value="diaChi">Địa chỉ</option>
                        </select>

                        <input name="keyword" required="required" type="text" value={keyword} onChange={(e)=> setKeyword(e.target.value)} />
                        <input type="submit" value="Search" onClick={e => handleSearchSubmit(e)}/>
                    </form>
                    
                    <br></br>
                    <form >
                    
                        <select name="sort__type" onChange={(e) => handleSortChange(e)}>
                            <option value="default">Sort By</option>
                            <option value="ten">Tên tài xế</option>
                            <option value="thamNien">Thâm niên</option>
                        </select>
                        <form style={{ paddingBottom : "15px"}}>
                            <input className="submit__luong" type="submit" value="Refresh" onClick={ e => freshHandle(e) }/>
                        </form>
                    </form>
                    <span className="insert">
                        <Link to={`/new`}>Thêm mới tài xế</Link>
                    </span>

                    <form>
                        <div className="table__content">
                            <table className="table__new">
                                <tbody>
                                <tr>
                                    <th>ID</th>
                                    <th>CMT</th>
                                    <th>Họ Tên</th>
                                    <th>Ngày sinh</th>
                                    <th>Địa chỉ</th>
                                    <th>Thâm niên</th>
                                    <th>Loại bằng lái</th>
                                    <th>Mã số bằng lái</th>
                                    <th>Bac luong</th>
                                    <th>Action</th>
                                </tr>
                                {
                                    drivers.map( (taixe) => {
                                        return <tr key ={taixe.id}>
                                                    <td>{taixe.id} </td>
                                                    <td>{taixe.cmt}</td>
                                                    <td>{taixe.ten}</td>
                                                    <td>{taixe.ngaySinh}</td>
                                                    <td>{taixe.diaChi}</td>
                                                    <td>{taixe.thamNien}</td>
                                                    <td>{taixe.loaiBangLai}</td>
                                                    <td>{taixe.maSoBangLai}</td>
                                                    <td>{taixe.luong.heSoLuong}</td>
                                                    <td><Link to={`/edit/${taixe.id}`}> Edit </Link>
                                                        <a onClick={() => deleteHandle(taixe.id)}>Delete</a>
                                                    </td>
                                                </tr>
                                    } )
                                }
                                </tbody>
                            </table>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
 
export default ListTaiXe;