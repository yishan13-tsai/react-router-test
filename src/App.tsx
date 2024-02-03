//src/App.jsx
//這邊順便在public資料夾下掛兩張圖，看一下掛在前端的圖能否正常輸出
/*
BrowserRouter 內basename="/test-vite-github-pages"是為了順應
github page在輸出以後我們要把'/'指向為:
https://<你的用戶名>.github.io/<你的專案名>/

用我的page範例如下:
https://lqtjim.github.io/test-vite-github-pages/

***BrowserRouter說明文件，可以看一下basename的部分***
https://v5.reactrouter.com/web/api/BrowserRouter
*/
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";

export function Index() {
  return (
    <>
      <div>首頁 路徑是 /</div>
      <img src={`${import.meta.env.VITE_BASENAME}/1.jpg`} alt="" />
    </>
  );
}
export function Page2() {
  return (
    <>
      <div>Page2 路徑是 Page2</div>
      <img src={`${import.meta.env.VITE_BASENAME}/2.jpg`} alt="" />
    </>
  );
}

function App() {
  return (
    <>
      <BrowserRouter basename="/react-router-test">
        <nav>
          <ul>
            <li>
              <Link to="/">page /</Link>
            </li>
            <li>
              <Link to="/page2">page2</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/page2" element={<Page2 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;