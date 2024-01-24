import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import Title from "@/components/title"
import Metadata from "@/components/widgets/metadata"

export default function About() {
    return(
        <div>
            <Metadata title="About" description=""/>
            <Navbar/>
            <Title title="About"/>
            <Footer/>
        </div>
    )
}