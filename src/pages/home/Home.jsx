import React, { useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import "./home.css";

import { Accordion } from "react-bootstrap";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fade triggerOnce>
      <body>
        <section className="home-section"></section>

        <section className="about-section">
          <h3 className="about-title">Kenal Lebih Dekat dengan Brain Communication</h3>

          <p className="about-text">
            Brain Communication adalah aplikasi belajar online yang menyediakan layanan berupa bimbingan belajar untuk membantu kamu dalam meningkatkan pemahaman di setiap materi pelajaran. Dengan Brain Communication , kamu akan dimudahkan
            dalam segala kebutuhan belajar yang dapat diakses kapan pun dan di mana pun. Sampai dengan saat ini banyak pelajar di Indonesia telah mempercayakan aplikasi belajar online Brain Communication sebagai media belajar online
            terbaik.
          </p>
          <p className="about-text">
            Brain Communication sebagai aplikasi bimbel online terbesar di Indonesia, tentu memiliki visi besar dalam upaya penyediaan layanan pendidikan dan materi pembelajaran dari guru-guru terbaik di seluruh Indonesia. Saat ini,
            aplikasi belajar online Brain Communication bisa digunakan untuk semua jenjang mulai dari SD, SMP, SMA, dan SMK. Beragam mata pelajaran pun dikemas secara interaktif dengan tujuan memberikan pemahaman yang lebih mudah dari
            materi yang kamu pelajari.
          </p>

          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Sejarah Lengkap</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quos iusto non accusantium? Mollitia, obcaecati nesciunt rem repudiandae illum velit illo blanditiis recusandae? Rerum dolores laboriosam, eos ducimus soluta in
                laudantium, nostrum veniam cupiditate adipisci animi natus sunt repellat quaerat facere mollitia quis? Modi quaerat a harum magni at earum optio, ullam iusto iure nihil obcaecati, qui esse aliquid. Id quibusdam praesentium
                perferendis odio, illum placeat numquam, velit pariatur itaque maxime asperiores distinctio, ratione delectus iusto molestiae similique magnam ad. Aliquam fuga, numquam est accusantium odit odio eaque eligendi! Dignissimos
                debitis aliquam saepe unde, possimus soluta asperiores aut ab accusantium perferendis amet corporis, earum praesentium reprehenderit perspiciatis. Debitis dolore libero dolores modi soluta optio pariatur nihil expedita? Amet
                hic repellat modi iusto, distinctio qui deserunt laboriosam nesciunt necessitatibus? Nemo minus hic laborum tenetur veritatis sunt, aspernatur dignissimos, iusto ea laudantium, reprehenderit facilis. Beatae perferendis
                pariatur dicta, similique excepturi voluptas veritatis voluptatum labore! Voluptatem doloribus quis fugiat aliquam ratione laboriosam autem mollitia harum placeat similique, omnis, repellat odio vitae consequuntur
                repellendus libero quia ut sint iusto voluptates dolorum explicabo ad. Officia ad aspernatur reiciendis repellat doloribus quasi explicabo est minima placeat officiis! Quis debitis unde corporis explicabo quo! Voluptas,
                error quos reprehenderit eos perferendis odio quasi delectus porro alias dolorem in quia, debitis obcaecati ad repudiandae fugiat id? Tempore beatae expedita ut eos architecto minus pariatur ea quibusdam vel fugit minima
                repudiandae alias, dolore molestiae, veniam ipsa ratione, voluptatem consectetur neque laborum sequi at cumque? Quod aperiam, dignissimos, mollitia autem sit repellendus eaque sed amet labore incidunt, vitae odio molestias
                asperiores ipsam fuga maiores officiis. Asperiores labore modi incidunt tenetur maxime accusamus quod autem, quo quis possimus tempore eveniet unde! Veritatis odio ratione optio aperiam doloremque alias, quod ad ab laborum
                vel sequi fugit nostrum tempora aut culpa magnam dolor tenetur! Deserunt nisi temporibus culpa ipsum iure accusamus atque sapiente necessitatibus vero nesciunt maiores, dolorum vitae neque quaerat reprehenderit repellendus
                fuga odio error consectetur, rem aspernatur libero laboriosam aperiam. Accusamus, facilis rerum placeat, iste magnam culpa eveniet quibusdam aliquid in illo commodi ea obcaecati praesentium aspernatur molestias non! Sint
                nesciunt architecto ea veritatis fugit vero suscipit et cum qui ut dolorem ipsa amet voluptate repellendus asperiores corrupti, est odio nulla a sapiente quae. Aliquid officia veniam quidem nisi temporibus, voluptates sit
                eius ex? Dolore nulla ab, error veniam at repudiandae eum nemo illum tempore dolorum modi asperiores incidunt quia. Harum laudantium rem blanditiis deleniti deserunt. Veritatis necessitatibus quasi quibusdam ipsam quam
                quidem excepturi non accusamus labore mollitia fugiat quaerat dolorum illo soluta ut, voluptatem animi voluptates obcaecati! Aliquam deleniti voluptas vitae dolore veniam voluptatibus repellendus ea ab distinctio labore
                earum magni id voluptates, expedita dicta quisquam possimus et. Ex cum iure architecto libero rerum enim blanditiis. Hic distinctio nam sit sequi odit laborum sunt, ad asperiores natus mollitia vero debitis possimus
                similique accusantium enim consectetur ipsa deleniti delectus aut ullam laudantium. Tempore sint porro nostrum exercitationem quae architecto excepturi velit, quod distinctio suscipit ullam dolor iusto magnam soluta numquam
                odit odio!
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </section>
      </body>
    </Fade>
  );
};

export default Home;
