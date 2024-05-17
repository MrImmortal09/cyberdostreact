import React from "react";
import GovtCard from "../GCard";

function GMeasures() {
  return (
    <div className="text-white w-full h-auto bg-zinc-900 p-12 md:24 flex flex-col flex-wrap gap-24">
      <div className="flex justify-center items-center">
        <p className="text-[#00DF9A] pt-5 text-4xl md:text-6xl lg:text-7xl">
          Government Measures
        </p>
      </div>
      <div className="flex flex-wrap justify-around gap-5">
        <GovtCard
          title="CITIZEN MANUAL"
          desc="It is a document to describe the functionalities and workflow that is provided to citizens on the cybercrime portal for reporting cybercrimes."
          imgLink="https://images.unsplash.com/photo-1530951517437-1b43a7349b10?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          buttonLink="https://cybercrime.gov.in/Webform/Citizen_Manual.aspx"
        />
        <GovtCard
          title="CYBER SAFETY TIPS"
          desc="To stay safe in the online world, it is important to follow important cyber safety practices which may help in protecting ourselves and our families from imminent threats that may harm our data and devices."
          imgLink="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          buttonLink="https://cybercrime.gov.in/Webform/Crime_OnlineSafetyTips.aspx"
        />
        <GovtCard
          title="CYBER AWARENESS"
          desc="Cyber awareness is an ongoing process of educating employees and citizens about the threats that lurk in cyberspace and how to act responsibly."
          imgLink="https://images.unsplash.com/photo-1624969862644-791f3dc98927?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGN5YmVyJTIwYXdhcmVuZXNzfGVufDB8fDB8fHww"
          buttonLink="https://cybercrime.gov.in/Webform/CyberAware.aspx"
        />
        <GovtCard
          title="DAILY DIGEST"
          desc="Comprehensive document prepared by Indian Cybercrime Coordination Centre (I4C) to aware employees and citizens about cyber fraud modus operandi."
          imgLink="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmV3c3xlbnwwfHwwfHx8MA%3D%3D"
          buttonLink="https://cybercrime.gov.in/Webform/dailyDigest.aspx"
        />
      </div>
      <div className="flex flex-wrap justify-around mb-12 gap-5">
        <GovtCard
          title="CITIZEN MANUAL"
          desc="It is a document to describe the functionalities and workflow that is provided to citizens on the cybercrime portal for reporting cybercrimes."
          imgLink="https://images.unsplash.com/photo-1530951517437-1b43a7349b10?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          buttonLink="https://cybercrime.gov.in/Webform/Citizen_Manual.aspx"
        />
        <GovtCard
          title="CYBER SAFETY TIPS"
          desc="To stay safe in the online world, it is important to follow important cyber safety practices which may help in protecting ourselves and our families from imminent threats that may harm our data and devices."
          imgLink="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          buttonLink="https://cybercrime.gov.in/Webform/Crime_OnlineSafetyTips.aspx"
        />
        <GovtCard
          title="CYBER AWARENESS"
          desc="Cyber awareness is an ongoing process of educating employees and citizens about the threats that lurk in cyberspace and how to act responsibly."
          imgLink="https://images.unsplash.com/photo-1624969862644-791f3dc98927?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGN5YmVyJTIwYXdhcmVuZXNzfGVufDB8fDB8fHww"
          buttonLink="https://cybercrime.gov.in/Webform/CyberAware.aspx"
        />
        <GovtCard
          title="DAILY DIGEST"
          desc="Comprehensive document prepared by Indian Cybercrime Coordination Centre (I4C) to aware employees and citizens about cyber fraud modus operandi."
          imgLink="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmV3c3xlbnwwfHwwfHx8MA%3D%3D"
          buttonLink="https://cybercrime.gov.in/Webform/dailyDigest.aspx"
        />
      </div>
    </div>
  );
}

export default GMeasures;