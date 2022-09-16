import Dashboard from "views/Dashboard.js";
import Notifications from "views/Notifications.js";
import Typography from "views/Typography.js";
import TableList from "views/Tables.js";
import UserPage from "views/User.js";
import Company from "views/Company.js";
import CompanyNew from "views/CompanyNew.js";
import CompanyEdit from "views/CompanyEdit.js";
import Employee from "views/Employee.js";
import EmployeeNew from "views/EmployeeNew.js";
import EmployeeEdit from "views/EmployeeEdit.js";
import Service from "views/Service.js";
import ServiceNew from "views/ServiceNew.js";
import ServiceEdit from "views/ServiceEdit.js";
import Staff from "views/Staff.js";
import StaffNew from "views/StaffNew.js";
import StaffEdit from "views/StaffEdit.js";
import AnalyticsCompanyCost from "views/AnalyticsCompanyCost.js";
import AnalyticsStaffSalary from "views/AnalyticsStaffSalary.js";
import AnalyticsCheckInOut from "views/AnalyticsCheckInOut.js";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/company/edit/:id",
    name: "Công ty",
    icon: "nc-icon nc-settings-gear-65",
    component: CompanyEdit,
    layout: "/admin",
    hideInSidebar: true,
  },
  {
    path: "/company/new",
    name: "Công ty",
    icon: "nc-icon nc-settings-gear-65",
    component: CompanyNew,
    layout: "/admin",
    hideInSidebar: true,
  },
  {
    path: "/company",
    name: "Công ty",
    icon: "nc-icon nc-settings-gear-65",
    component: Company,
    layout: "/admin"
  },
  {
    path: "/employee/edit/:id",
    name: "Nhân viên",
    icon: "nc-icon nc-settings-gear-65",
    component: EmployeeEdit,
    layout: "/admin",
    hideInSidebar: true,
  },
  {
    path: "/employee/new",
    name: "Nhân viên",
    icon: "nc-icon nc-settings-gear-65",
    component: EmployeeNew,
    layout: "/admin",
    hideInSidebar: true,
  },
  {
    path: "/employee",
    name: "Nhân viên",
    icon: "nc-icon nc-settings-gear-65",
    component: Employee,
    layout: "/admin"
  },
  {
    path: "/service/edit/:id",
    name: "Dịch vụ",
    icon: "nc-icon nc-settings-gear-65",
    component: ServiceEdit,
    layout: "/admin",
    hideInSidebar: true,
  },
  {
    path: "/service/new",
    name: "Dịch vụ",
    icon: "nc-icon nc-settings-gear-65",
    component: ServiceNew,
    layout: "/admin",
    hideInSidebar: true,
  },
  {
    path: "/service",
    name: "Dịch vụ",
    icon: "nc-icon nc-settings-gear-65",
    component: Service,
    layout: "/admin"
  },
  {
    path: "/staff/edit/:id",
    name: "Nhân viên tòa nhà",
    icon: "nc-icon nc-settings-gear-65",
    component: StaffEdit,
    layout: "/admin",
    hideInSidebar: true,
  },
  {
    path: "/staff/new",
    name: "Nhân viên tòa nhà",
    icon: "nc-icon nc-settings-gear-65",
    component: StaffNew,
    layout: "/admin",
    hideInSidebar: true,
  },
  {
    path: "/staff",
    name: "Nhân viên tòa nhà",
    icon: "nc-icon nc-settings-gear-65",
    component: Staff,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "nc-icon nc-bell-55",
    component: Notifications,
    layout: "/admin",
    hideInSidebar: true
  },
  {
    path: "/user-page",
    name: "User Profile",
    icon: "nc-icon nc-single-02",
    component: UserPage,
    layout: "/admin",
    hideInSidebar: true
  },
  {
    path: "/tables",
    name: "Table List",
    icon: "nc-icon nc-tile-56",
    component: TableList,
    layout: "/admin",
    hideInSidebar: true
  },
  {
    path: "/typography",
    name: "Typography",
    icon: "nc-icon nc-settings-gear-65",
    component: Typography,
    layout: "/admin",
    hideInSidebar: true
  },
  {
    path: "/sv-cost",
    name: "Tiền dịch vụ",
    icon: "nc-icon nc-money-coins",
    component: AnalyticsCompanyCost,
    layout: "/admin",
  },
  {
    path: "/salary",
    name: "Lương nhân viên",
    icon: "nc-icon nc-money-coins",
    component: AnalyticsStaffSalary,
    layout: "/admin",
  },
  {
    path: "/check-in-out",
    name: "Checkin/Checkout",
    icon: "nc-icon nc-touch-id",
    component: AnalyticsCheckInOut,
    layout: "/admin",
  }
];
export default routes;
