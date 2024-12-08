import Layout from "@/components/Layout";
import Banner from "@/components/Portfolio-components/Banner";
import TechnicalSkills from "@/components/Portfolio-components/TechnicalSkills";
import Experience from "@/components/Portfolio-components/Experience";
import PC from "@/components/Portfolio-components/PC";
import Award from "@/components/Portfolio-components/Award";
import Projects from "@/components/Portfolio-components/Projects";
import BasicMeta from "@/components/meta/BasicMeta";
import OpenGraphMeta from "@/components/meta/OpenGraphMeta";
import TwitterCardMeta from "@/components/meta/TwitterCardMeta";


const Portfolio = () => {
  return (
    <Layout >
      <BasicMeta url={"/"} title="Portfolio"/>
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <Banner />
      <TechnicalSkills />
      <Experience />
      <PC />
      <Award />
      <Projects />
    </Layout>
  );
};

export default Portfolio;
