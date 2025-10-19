import React from "react";
import ReelCard from "./components/ReelCard";

export default function App() {
  const basicReels = [
    {
      id: "basic1",
      title: "Sample 1",
      src: "https://oncloudportfolio.s3.ap-south-1.amazonaws.com/Reel+01.3.mp4",
      // poster: "/reels/thumb1.jpg", // optional
    },
    {
      id: "basic2",
      title: "Sample 2",
      src: "https://oncloudportfolio.s3.ap-south-1.amazonaws.com/get.mp4",
    },
    {
      id: "basic3",
      title: "Sample 3",
      src: "https://oncloudportfolio.s3.ap-south-1.amazonaws.com/IMG_5623.MOV",
    },
    {
      id: "basic4",
      title: "Sample 4",
      src: "https://oncloudportfolio.s3.ap-south-1.amazonaws.com/IMG_8678.MP4",
    },
  ];

  const campaignReels = [
    {
      id: "campaign1",
      title: "Sample 1",
      src: "https://oncloudportfolio.s3.ap-south-1.amazonaws.com/Reel+03.mp4",
    },
    {
      id: "campaign2",
      title: "Sample 2",
      src: "https://oncloudportfolio.s3.ap-south-1.amazonaws.com/Jaipurites%2C+what%E2%80%99s+all+this+chaos+and+celebrationAhh%E2%80%A6+it%E2%80%99s+the+Baise+Gaba+Mela+lighting+up+th.mp4",
    },
    {
      id: "campaign3",
      title: "Sample 3",
      src: "https://oncloudportfolio.s3.ap-south-1.amazonaws.com/She+wanted+to+feel+new%E2%80%A6+she+chose+Geetanjali.+This+Diwali%2C+it%E2%80%99s+your+turn!%23geetanjaliglam.....mp4",
    },
    {
      id: "campaign4",
      title: "Sample 4",
      src: "https://oncloudportfolio.s3.ap-south-1.amazonaws.com/Reel+07.mp4",
    },
  ];

  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'black'}} className="min-h-screen">
      <header style={{width: '95%', display: 'flex', alignItems: 'center', justifyContent: 'center',flexWrap: 'wrap'}} className="bg-white shadow">
        <img style={{height: '15rem'}} src="./src/assets/OnCloudMediaLogo.png" alt="OnCloud.Media" />
        <div style={{flexDirection: 'column', margin: '5% 5%'}} className="max-w-5xl mx-auto px-6 py-8 flex items-center justify-between">
          <h1 style={{fontSize: '2em'}} className="text-2xl font-bold bbh-sans-bartle-regular">Creative Portfolio</h1>
          <h3 className="playwrite-de-sas" >You'll soon find us while scrolling</h3>
        </div>
        {/* <img style={{height: '10rem'}} src="./src/assets/ContactUsBtn.png" alt="ContactUs" /> */}
      </header>

      <main style={{width: '100%'}} className="max-w-5xl mx-auto px-6 py-12 space-y-16">
        {/* Section 1 */}
        <section id="basic">
          <h2 style={{textAlign: 'center'}} className="text-2xl font-semibold mb-6 bbh-sans-bartle-regular">Professional Reels</h2>
          <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap'}}>
            {basicReels.map(r => <ReelCard key={r.id} reel={r} />)}
          </div>
        </section>

        {/* Section 2 */}
        <section id="campaigns">
          <h2 style={{textAlign: 'center', marginTop: '4%'}} className="text-2xl font-semibold mb-6 bbh-sans-bartle-regular">Engagement Reels</h2>
          <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap'}}>
            {campaignReels.map(r => <ReelCard key={r.id} reel={r} />)}
          </div>
        </section>
      </main>

      <div style={{width: '95%', backgroundColor: '#343434', display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2%'}} >
        <div style={{marginBottom: '1%'}} >Contact Us</div>
        <div>E-mail : vireshmitra@zohomail.in</div>
        <div>Mobile : +91-9696774888 | +91-9235836244</div>
      </div>

      <footer style={{padding: '1%'}} className="py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} OnCloud.Media
      </footer>
    </div>
  );
}
