import Divider from "../components/divider/Divider";
import Footer from "../components/footer/Footer";
import MainTopbar from "../components/header/MainTopbar";
import NotFoundContent from "../components/notFound/NotFound";
import LoginForm from "../components/authentification/LoginForm";
import ResetPassword from "../components/authentification/ResetPassword";
import RegisterForm from "../components/authentification/RegisterForm";
import CreateNewButton from "../components/dashboard/createNew/CreateNewButton";
import CreateNewGig from "../components/createNew/CreateNewGig";
import CreateNewRequest from "../components/createNew/CreateNewRequest";
import Review from "../components/createNew/CreateNewReview";
import FeaturedGigs from "./FeaturedGigs"
import Seller from "./Seller"
import Gig from "../components/discover/Gig"

const Test = props => {
    return(
        <>
        
<div className="admin-wrapper">
            <MainTopbar />
            <CreateNewButton />
                <NotFoundContent
                    notFoundImage="img/illustrator/6.png"
                    heading="Uh oh! Nothing found."
                    subHeading="We couldn't find any results for your search. Try again."
                    button={[
                        {
                            color: "primary",
                            path: "/",
                            icon: "bi-house",
                            text: "Go Home"
                        }
                    ]}
                />
            <Divider />

            <LoginForm
                title="Welcome Back!" 
                subTitle="Didn't have an account?" 
                button={[
                    {
                        text: "Register now!",
                        path: "/register"
                    }
                ]} 
            />

            <Divider />

            <ResetPassword 
                title="Reset Password" 
                subTitle="Already have an account?" 
                button={[
                    {
                        text: "Log In",
                        path: "/login"
                    }
                ]}
            />

            <Divider />

            <RegisterForm
                title="Create your free account" 
                subTitle="Already have an account?" 
                button={[
                    {
                        text: "Log In",
                        path: "/login"
                    }

                ]}
            />

            <Divider />

            <CreateNewGig />


            <Divider />

            <CreateNewRequest />

            <Divider />

            <Review 
                contactTitle="Gig completed!" 
                contactSubTitle="Rate & Review - Share about your expirence with this gig and seller."
            />

            <Divider />

            <Seller 
            seller="jimmy_fun"
            />

            <Divider />

            <Gig
            gig="1"
            />
            <Divider />

            <FeaturedGigs />

            <Divider />


            <Divider />


            
</div>
            <Footer />
        </>
    )
}

export default Test;