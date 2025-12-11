import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from "../Layout/RootLayout";
import Home from "../Components/Home/Home";
import LoginPage from "../Authentication/LoginPage";
import SelectRole from "../Pages/SelectRole/SelectRole";
import Studentinformation from "../Pages/Studentinformation/Studentinformation";
import Tutorinformation from "../Pages/Tutorinformation/Tutorinformation";
import Toutorstap2 from "../Pages/Tutorinformation/Toutorstap2";
import StepThree from "../Pages/Tutorinformation/StepThree";
import RecoverAccount from "../Authentication/RecoverAccount";
import EnterVerification from "../Authentication/EnterVerification";
import SetPassword from "../Authentication/SetPassword";
import Studentdashboard from "../Dashboard/Studentdashboard/Studentdashboard";
import FindTutors from "../Dashboard/Studentdashboard/FindTutors";
import Notification from "../Dashboard/Studentdashboard/Notification";
import MyLessonsPage from "../Dashboard/Studentdashboard/MyLessonsPage";
import FilterSidebar from "../Dashboard/Studentdashboard/FilterSidebar";
import PaymentHistory from "../Dashboard/Studentdashboard/PaymentHistory";
import Messages from "../Dashboard/Studentdashboard/Messages";
import Support from "../Dashboard/Studentdashboard/Support";
import MyProfile from "../Dashboard/Studentdashboard/MyProfile";
import EditProfile from "../Dashboard/Studentdashboard/Editprofile";
import TutorDetails from "../Dashboard/Studentdashboard/TutorDetails";
import PaymentUI from "../Dashboard/Studentdashboard/PaymentUI";
import SendMessages from "../Dashboard/Studentdashboard/SendMessages";
import ToutorDashbord from "../Dashboard/ToutorDashborad/ToutorDashbord";
import ToutorNotification from "../Dashboard/ToutorDashborad/ToutorNotification";
import ToutorMyLessonsPage from "../Dashboard/ToutorDashborad/ToutorMyLessonsPage";
import Earning from "../Dashboard/ToutorDashborad/Earning";
import ToutorMessages from "../Dashboard/ToutorDashborad/ToutorMessages";
import ToutorSupport from "../Dashboard/ToutorDashborad/ToutorSupport";
import ToutorMyProfile from "../Dashboard/ToutorDashborad/ToutorMyProfile";
import ToutorEditProfile from "../Dashboard/ToutorDashborad/ToutorEditProfile";
import ToutorStudent from "../Dashboard/ToutorDashborad/ToutorStudent";

export const router = createBrowserRouter([
  {
    path: "/",
   Component:RootLayout,
   children:[
    {
        index:true,
        Component:Home
    },
    {
        path:'login',
        Component:LoginPage
    },
    {
        path:'selectrole',
        Component:SelectRole
    },
    {
        path:'studentinformation',
        Component:Studentinformation
    },
    {
        path:'tutorinformation',
        Component:Tutorinformation
    },
    {
        path:'toutorstap2',
        Component:Toutorstap2
    },
    {
        path:'stepthree',
        Component: StepThree
    },
    {
        path:'recoveraccount',
        Component:RecoverAccount
    },
    {
        path:'enterverification',
        Component:EnterVerification
    },
    {
        path:'setpassword',
        Component:SetPassword
    },
    
   ]
  },
  {
    path:'/dashboard',
    Component:Studentdashboard,
    children:[
        {
            path:'findtutors',
            Component:FindTutors
        },
        {
            path:'notification',
            Component:Notification
        },
        {
            path:'myLessonspage',
            Component:MyLessonsPage
        },
        {
            path:'filtersidebar',
            Component:FilterSidebar
        },
        {
            path:'paymenthistory',
            Component:PaymentHistory
        },
        {
            path:'messages',
            Component:Messages
        },
        {
            path:'support',
            Component:Support
        },
        {
            path:'myprofile',
            Component:MyProfile
        },
        {
            path:'editprofile',
            Component:EditProfile
        },
        {
            path:'tutordetails',
            Component:TutorDetails
        },
        {
            path:'paymentul',
            Component:PaymentUI
        },
        {
            path:'sendmessages',
            Component:SendMessages
        },
       
    ]
  }
  ,
  {
    path:'toturdashbord',
    Component:ToutorDashbord,
    children:[
        {
            path:'toutornotification',
            Component:ToutorNotification
        },
        {
            path:'toutormyLessonspage',
            Component:ToutorMyLessonsPage
        },
        {
            path:'earning',
            Component:Earning
        },
        {
            path:'toutormessages',
            Component:ToutorMessages
        },
        {
            path:'toutorsupport',
            Component:ToutorSupport
        },
        {
            path:'toutormyprofile',
            Component:ToutorMyProfile
        },
        {
            path:'toutoreditprofile',
            Component:ToutorEditProfile
        },
        {
            path:'toutorstudent',
            Component:ToutorStudent
        },
    ]
  }
]); 