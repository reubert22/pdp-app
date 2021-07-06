import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Layout, siteTitle } from "../components/Layout/Layout";
import styleSCSS from "../styles/global.module.scss";

const moralValues = [
  {
    id: 1,
    title: "Quem sou eu",
    description:
      "Eu sou um cara tranquilo, de bem com a vida, feliz e tento sempre proporcionar a vibração de positividade e felicidade onde vou. Procuro sempre trabalhar da melhor maneira possível e melhorando a cada dia. Sempre correndo atrás dos meus objetivos sem cansar sobre. Gosto de tomar uma brejinha e curtir os momentos.",
  },
  {
    id: 2,
    title: "Missão",
    description:
      "Minha missão é melhorar a cada dia tanto no pessoal quanto no profissional. Montar minha vida do meu jeito e construir minha família, curtindo cada momento da melhor maneira possível.",
  },

  {
    id: 3,
    title: "Valores",
    description:
      "Honestidade, trabalho duro, autonomia em decisões, humildade em qualquer lugar, respeito pra chegar e pra sair. ",
  },
  {
    id: 4,
    title: "Forças",
    description:
      "Minha força é ver todo mundo bem e na paz. Trabalho não somente para o Reubert mas também para aqueles que se inspiram em você.",
  },
];

export default function Home() {
  return (
    <Layout>
      <div className={styleSCSS.container}>
        <div className={styleSCSS.container_first}>
          <div className={styleSCSS.container_image}>
            <Image
              src="/images/ciandt.png"
              height={80}
              width={200}
              alt="Logo"
            />
          </div>
          <div className={styleSCSS.container_text}>
            <div className={styleSCSS.title}>
              Processo de Desenvolvimento
              <br /> 2.0
            </div>
            <div className={styleSCSS.name}>
              Reubert Fernandes Rodrigues Barbosa
            </div>
          </div>
          <div className={styles.container_btn}>
            <button className={styleSCSS.draw}>Next</button>
          </div>
        </div>

        <div className={styleSCSS.container_second}>
          <div className={styleSCSS.container_image_profile}>
            <Image
              className={styleSCSS.image}
              src="/images/reubert.jpeg"
              height={100}
              width={100}
              alt="Logo"
            />
          </div>
          <div className={styleSCSS.container_section}>
            {moralValues.map((value) => (
              <>
                <div className={styleSCSS.value_title}>{value.title}</div>
                <div className={styleSCSS.value_description}>
                  {value.description}
                </div>
              </>
            ))}
          </div>
          <div className={styles.container_btn}>
            <button className={styleSCSS.draw}>Anterior</button>
            <button className={styleSCSS.draw}>Próximo</button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
