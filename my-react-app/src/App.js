import './App.css';
import Navbar from "./components/Navbar.js"
import About from "./components/About.js"
import React, { useState } from 'react';
import './About.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {

  const togg = (img) => {
    if (!img) return
    if (!img.classList.contains('turn')) {

      img.classList.add('turn')
      img.parentElement.nextElementSibling.classList.add('active')


    }

    else {
      img.classList.remove('turn')
      img.parentElement.nextElementSibling.classList.remove('active')


    }


  }


  const [mode, setmode] = useState('light')
  const [text, settext] = useState('Enable DarkMode')

  const toggle = () => {
    document.body.classList = []
    if (mode === "light") {
      setmode("dark")
      settext("Enable LightMode")
      document.body.classList.add('darkmode')
    }
    else {
      setmode("light")
      settext("Enable DarkMode")
      document.body.classList.add('lightmode')


    }
  }



  const change = (ele) => {
    let bun = document.body
    const id = ele.id
    if (bun.classList.length === 0) {
      bun.classList.add(`${id}`)
    }
    else {
      bun.classList = []
      bun.classList.add(`${id}`)
    }
  }
  return (
    <>
      <Router>
        <Switch>
          <Route path="/about">
            <Navbar mode={mode} toggling={toggle} texty={text} change={change} />
            <About togg={togg} />
          </Route>
          <Route path="/">
            <Navbar mode={mode} toggling={toggle} texty={text} change={change} />
            <div className='bin'>
              <h1>Content</h1>
              <div className="container" >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis distinctio quisquam non ipsa aliquid inventore! Voluptate, iusto. Tempore, rem ipsam atque consectetur est perspiciatis architecto? Aspernatur deserunt voluptas eos. Minima nihil dicta vel doloremque. Nemo animi aliquid magni tempore commodi nostrum tenetur itaque incidunt dolorum velit, cum, quidem eos in officiis minus quo, dolore sit maxime repellendus ullam voluptas distinctio? Quis consectetur nesciunt necessitatibus fugit assumenda animi doloremque, neque illo! Reiciendis numquam at expedita distinctio vero iusto, dolorem consequuntur eligendi consectetur facere explicabo, perspiciatis inventore deleniti similique fugiat nobis non temporibus quisquam! In possimus cupiditate vitae fugiat! Debitis id necessitatibus dolorum est impedit ab? Dolor iusto voluptatum odit fugiat voluptatibus vero nihil voluptates necessitatibus deserunt tempora molestias cupiditate voluptas minima facilis soluta eligendi pariatur doloremque perferendis voluptatem, exercitationem est earum quae ad. Vel ducimus dolorem rerum. Nulla velit, officia, obcaecati neque voluptatum culpa quasi autem eos corrupti tempore facere rerum temporibus iusto officiis cupiditate laudantium vero vel alias iste? A, libero corrupti sit laborum veritatis perferendis tenetur dolore fuga soluta cupiditate deserunt ex accusamus, aliquam dolorum ut quasi assumenda quisquam quam rem pariatur. Beatae, aliquid quam hic amet ipsam quasi ex. Impedit rem deserunt qui, voluptatibus voluptate a. Illo ab ducimus ipsa, vel veritatis totam accusamus non temporibus voluptas sit deserunt laboriosam, dolor et! Suscipit eius pariatur illo, soluta, atque culpa officia reiciendis fuga laboriosam nesciunt harum? Repudiandae possimus dolorum, nihil earum debitis hic sapiente praesentium suscipit recusandae totam quidem quisquam necessitatibus eaque. Temporibus amet non saepe tempore, ab excepturi unde sed magnam voluptatem repellendus nemo blanditiis voluptatibus assumenda eaque nisi consectetur minima magni natus voluptate quisquam voluptas laudantium. Similique culpa aspernatur aperiam! Aliquam quo quasi vero? Optio nostrum, rerum quae unde consectetur saepe voluptates tempora dolorum esse consequuntur a laudantium rem cum voluptatem error, impedit laborum aliquam ea perferendis aliquid quia officia maxime et possimus. Laudantium praesentium, debitis fuga tempore eveniet doloribus similique quidem quos provident accusamus porro nobis aperiam assumenda nisi omnis dolore consequuntur cupiditate quam? Itaque repellat, error dolores cum, odit eum, quis asperiores natus accusamus ab cupiditate vel ea exercitationem sapiente deserunt! Sunt quisquam dolores non nihil mollitia facilis excepturi, placeat accusantium, voluptas reprehenderit sit? Eum sequi vero ducimus quaerat vel veniam eos ab, cupiditate perferendis distinctio facilis quisquam doloremque deserunt incidunt modi tempore in saepe quae fugiat officiis commodi error itaque inventore? Quo voluptatum nisi impedit! Accusamus reiciendis velit earum inventore totam pariatur at consequatur, praesentium voluptatem libero nisi doloremque neque labore quidem doloribus quia esse veniam numquam recusandae cupiditate vel maiores sapiente. Laboriosam saepe vel nisi labore dolorem tenetur excepturi a vitae eligendi? Nam fugit nihil libero velit enim sed ut quis veniam suscipit voluptas debitis consequuntur, ipsum aspernatur rem animi autem consequatur corporis repudiandae rerum modi dignissimos eos? Similique esse ratione veritatis, nemo nobis pariatur non dolores odio. Eius odit non, harum porro eum possimus cumque voluptatem aliquam autem assumenda! Reprehenderit provident quae expedita sunt saepe, laborum cumque quod repellat necessitatibus, quia sequi numquam aliquid asperiores odio, minima voluptatum? Alias, laborum ad quae quisquam soluta cumque quia officia, sunt porro ut veniam delectus, quam harum dolor quidem cum necessitatibus sint totam doloribus nobis qui unde eius nisi quos! Itaque ipsum distinctio voluptatibus recusandae, aspernatur autem asperiores ab maxime nisi laboriosam voluptas molestiae sunt quas id delectus dolorum nihil, dolorem nam odio vel sequi placeat ea tempora. Ullam dolores possimus corporis dolorem voluptas. Nisi dicta esse id dolores impedit sequi doloribus corrupti commodi nostrum. Sed debitis possimus quos officiis quidem pariatur enim voluptate, architecto obcaecati cupiditate, quia aliquam quaerat iure perferendis itaque minus reiciendis. Ad earum quia numquam ex. Ipsum rerum, natus dolor tempore saepe explicabo accusantium inventore voluptates incidunt quas assumenda expedita unde voluptatibus, consequatur eius, quidem porro possimus at aliquid. Unde illum non possimus quis natus cumque enim dicta officia, ut quo at id ab esse explicabo quidem veniam! Nulla repudiandae sed doloremque officia quaerat adipisci reprehenderit perferendis numquam quae, animi repellat sit aut doloribus dolorem quasi? Perspiciatis eveniet quod quos est nisi eius tempora, eligendi, enim voluptates saepe rerum repudiandae? Fuga atque nesciunt illo facilis nostrum, dolor error nobis enim aliquid rerum similique? Illum excepturi et eveniet nisi dolor repellendus, doloribus quis quam non quae, voluptatibus rerum. Dicta iusto nulla magni maxime aspernatur modi corrupti distinctio vitae suscipit deserunt, alias eaque cumque enim animi cupiditate corporis optio officiis quos. Ullam error nulla optio magni quia corrupti inventore dignissimos consectetur, sunt et exercitationem. Architecto repellendus veniam vitae quos hic placeat possimus doloremque, ex adipisci et voluptatibus, id aut! At corrupti quibusdam nostrum voluptate reprehenderit, magnam magni, quia, voluptatibus error esse officiis. Mollitia eveniet cumque deleniti sint aperiam delectus! Reiciendis rerum tempora saepe similique porro asperiores distinctio, modi numquam suscipit maiores dolore non hic neque corrupti nobis voluptatibus quas dolorem eos facilis animi consequatur blanditiis consequuntur? Nam dolorum quod ullam nesciunt aspernatur vitae necessitatibus perferendis incidunt, dignissimos ipsam at quo veniam fuga qui, veritatis accusantium? Rerum error dolore quis illum maxime nam quos dicta a cumque debitis distinctio nobis nihil voluptates possimus, exercitationem esse expedita aut velit in alias ad. Incidunt distinctio natus consectetur ipsam, dignissimos in optio ab doloremque eaque sequi ipsa suscipit tempora aliquid perferendis a magnam excepturi ut odit tempore corporis nesciunt impedit aliquam? Nemo laboriosam tenetur pariatur reiciendis adipisci odit quas architecto, inventore, officia ullam magnam rerum dolores modi id sed recusandae, quis accusamus beatae dicta quidem incidunt? Voluptatibus perferendis quae nemo illum, delectus pariatur vitae eveniet recusandae culpa veniam dolores quis excepturi reiciendis voluptas, ea harum qui eum, inventore ex tempora adipisci? Praesentium atque esse explicabo odio perferendis rem quia reiciendis odit, tempore optio beatae corporis eum, iusto ullam, hic ipsa quam eius repellat mollitia? Obcaecati, quod provident reiciendis amet quasi neque natus dignissimos consectetur possimus cum minima necessitatibus assumenda omnis, dolor nostrum aspernatur, placeat recusandae alias id voluptatem nihil fuga. Pariatur beatae suscipit quia molestias dolores aperiam, animi deserunt ducimus repellat, rerum ipsum similique quidem tempora in assumenda error laudantium incidunt! Molestiae corrupti hic illum, ab nulla delectus repellendus ipsam neque tempora accusamus, iste commodi ut fugiat?</div>
            </div>
          </Route>
        </Switch>
      </Router>

    </>
  );
}

export default App;
