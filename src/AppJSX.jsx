import "./App.css";

function AppJSX() {
  const name = '앤디';
  const list = ['우유', '딸기', '바나나']
  return (
    <>
      <h1 className="orange">Hello!</h1>
      <h2>`Hello!! {name}`</h2>
      <p></p>
      <ul>
        {
          list.map((item) => {
            return <li>{item}</li>
          })
        }
      </ul>
      <img
        style={{ width: "200px", height: "200px" }}
        src="https://images.unsplash.com/photo-1708149421696-d9fa65123f10?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="winter"
      />
    </>
  );
}

export default AppJSX;
