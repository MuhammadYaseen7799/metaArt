import dynamic from "next/dynamic";

const Counter = dynamic(() => import("./Counter"), {
  ssr: false,
});

const FunFacts = () => {
  return (
    <section id="fun_facts">
      <div className="container">
        <div className="fn_cs_desc">
          <ul>
            <h1>Generate Unlimite Images Free.......</h1>

            
          </ul>
        </div>
      </div>
    </section>
  );
};
export default FunFacts;
