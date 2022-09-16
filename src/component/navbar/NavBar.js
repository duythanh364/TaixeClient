import '../../assets/css/navbar.css'
const NavBar = () => {
    return <nav>
                <ul>
                    <li className="logo"><img alt="" src="https://avatars.githubusercontent.com/u/57191540?s=200&v=4"/></li>
                    <li>
                        <a><i className="fa fa-id-card" aria-hidden="true"></i>   Tài xế</a>
                    </li>
                    <li>
                        <a><i className="fa fa-calendar" aria-hidden="true"></i>   Tuyến xe</a>
                    </li>
                    <li>
                        <a><i className="fa fa-bus" aria-hidden="true"></i>   Xe khách</a>
                    </li>
                    <li>
                        <a><i className="fa fa-line-chart" aria-hidden="true"></i>   Chuyến xe</a>
                    </li>   
                    <li>
                        <a><i className="fa fa-money" aria-hidden="true"></i>   Bậc lương</a>
                    </li>
                    <li className="content__navbar-item-stat">
                        <a href=""><i className="fa fa-pie-chart" aria-hidden="true"></i>   Thống kê<i className="fa fa-arrow-right" aria-hidden="true"></i></a>
            
                        <div className="content__navbar-stat">
                            <div className="stat"><a className="none" >Lương tài xế</a></div>
                            <div className="stat"><a className="none" >Doanh thu xe</a></div>
                            <div className="stat"><a className="none" >Các chuyến xe đã chạy trong tháng của tài xế </a></div>
                        </div>
                    </li>
                </ul>
            
            </nav>
     
}
 
export default NavBar;