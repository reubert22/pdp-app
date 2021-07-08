import Head from "next/head";
import Image from "next/image";
import { Layout, siteTitle } from "../components/Layout/Layout";
import styleSCSS from "../styles/global.module.scss";
import {
  moralValues,
  moments,
  momentDescription,
  aspirations,
  firstCicleEvidence,
  secondCicleEvidence,
  thirdCicleEvidence,
  fourthCicleEvidence,
  nextStepEvidence,
  learningEvidence,
} from "../utils/mocks";

const section = {
  FIRST: "first",
  SECOND: "second",
  THIRD: "third",
  FOURTH: "fourth",
  FIFTH: "fifth",
  SIXTH: "sixth",
  SEVENTH: "seventh",
  EIGHTH: "eighth",
  NINETH: "nineth",
  TENTH: "tenth",
  ELEVENTH: "eleventh",
  TWELFTH: "twelfth",
  THIRTEENTH: "thirteenth",
  FOURTEEN: "fourteen",
};

export default function Home() {
  const handleClick = (section: string) => {
    if (document) {
      document.getElementById(section)?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className={styleSCSS.container}>
        <div id={section.FIRST} className={styleSCSS.container_first}>
          <div>
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
          <div className={styleSCSS.button_container}>
            <button
              onClick={() => handleClick(section.SECOND)}
              className={styleSCSS.draw}
            >
              Próximo
            </button>
          </div>
        </div>

        <div id={section.SECOND} className={styleSCSS.container_second}>
          <div className={styleSCSS.container_image_profile}>
            <Image
              className={styleSCSS.image}
              src="/images/reubert.jpeg"
              height={100}
              width={100}
              alt="Profile"
            />
          </div>
          <div className={styleSCSS.container_section}>
            {moralValues.map((value) => (
              <>
                <div
                  key={`moral-${value.id}`}
                  className={styleSCSS.value_title}
                >
                  {value.title}
                </div>
                <div className={styleSCSS.value_description}>
                  {value.description}
                </div>
              </>
            ))}
          </div>
          <div className={styleSCSS.button_container}>
            <button
              onClick={() => handleClick(section.FIRST)}
              className={styleSCSS.draw}
            >
              Anterior
            </button>
            <span>{2 + "/" + 14}</span>
            <button
              onClick={() => handleClick(section.THIRD)}
              className={styleSCSS.draw}
            >
              Próximo
            </button>
          </div>
        </div>

        <div id={section.THIRD} className={styleSCSS.container_third}>
          <div className={styleSCSS.title}>Momentos que importam</div>
          <div className={styleSCSS.container_moment}>
            {moments.map((moment, idx) => (
              <>
                <div key={`item-${idx}`} className={styleSCSS.year}>
                  {moment.year}
                </div>
                {moment.items.map((item) => (
                  <div key={`moment-${item.id}`} className={styleSCSS.moment}>
                    <div className={styleSCSS.month_and_badge}>
                      <div className={styleSCSS.month}>{item.month}</div>
                      <div className={styleSCSS.description}>
                        {item.description}
                      </div>

                      <div className={styleSCSS.container_badge}>
                        {item.moment && (
                          <div className={styleSCSS.badge_heart} />
                        )}
                        <div className={styleSCSS.badge_check} />
                      </div>
                    </div>
                  </div>
                ))}
              </>
            ))}
            <div className={styleSCSS.container_moment_description}>
              {momentDescription.map((description) => (
                <div
                  key={`moment-description-${description.id}`}
                  className={styleSCSS.container_description}
                >
                  <div className={styleSCSS[`${description.mean}`]} />
                  <div className={styleSCSS.description}>
                    {description.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styleSCSS.button_container}>
            <button
              onClick={() => handleClick(section.SECOND)}
              className={styleSCSS.draw}
            >
              Anterior
            </button>
            <span>{3 + "/" + 14}</span>
            <button
              onClick={() => handleClick(section.FOURTH)}
              className={styleSCSS.draw}
            >
              Próximo
            </button>
          </div>
        </div>

        <div id={section.FOURTH} className={styleSCSS.container_fourth}>
          <div className={styleSCSS.title}>
            Em relação às minhas aspirações, o que eu deveria...
          </div>
          <div className={styleSCSS.container_aspirations}>
            {aspirations.map((aspiration) => (
              <div
                key={`aspiration-${aspiration.description}`}
                className={styleSCSS.aspiration_border}
              >
                <div className={styleSCSS.aspiration_description}>
                  {aspiration.description}
                </div>
                {aspiration.items.map((item) => (
                  <div
                    key={`aspiration-${item.id}`}
                    className={styleSCSS.aspiration_container}
                  >
                    <div className={styleSCSS.description}>
                      &nbsp;&nbsp;&nbsp;&gt; {item.description}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className={styleSCSS.button_container}>
            <button
              onClick={() => handleClick(section.THIRD)}
              className={styleSCSS.draw}
            >
              Anterior
            </button>
            <span>{4 + "/" + 14}</span>
            <button
              onClick={() => handleClick(section.FIFTH)}
              className={styleSCSS.draw}
            >
              Próximo
            </button>
          </div>
        </div>

        <div id={section.FIFTH} className={styleSCSS.evidence_main_container}>
          <div className={styleSCSS.title}>
            Itens fechados no último ciclo e suas evidências
          </div>

          <RenderEvidence data={firstCicleEvidence} />

          <div className={styleSCSS.button_container}>
            <button
              onClick={() => handleClick(section.FOURTH)}
              className={styleSCSS.draw}
            >
              Anterior
            </button>
            <span>{5 + "/" + 14}</span>
            <button
              onClick={() => handleClick(section.SIXTH)}
              className={styleSCSS.draw}
            >
              Próximo
            </button>
          </div>
        </div>

        <div id={section.SIXTH} className={styleSCSS.evidence_main_container}>
          <div className={styleSCSS.title}>
            Itens fechados no último ciclo e suas evidências
          </div>

          <RenderEvidence data={secondCicleEvidence} />

          <div className={styleSCSS.button_container}>
            <button
              onClick={() => handleClick(section.FIFTH)}
              className={styleSCSS.draw}
            >
              Anterior
            </button>
            <span>{6 + "/" + 14}</span>
            <button
              onClick={() => handleClick(section.SEVENTH)}
              className={styleSCSS.draw}
            >
              Próximo
            </button>
          </div>
        </div>

        <div id={section.SEVENTH} className={styleSCSS.evidence_main_container}>
          <div className={styleSCSS.title}>
            Itens fechados no último ciclo e suas evidências
          </div>

          <RenderEvidence data={thirdCicleEvidence} />

          <div className={styleSCSS.button_container}>
            <button
              onClick={() => handleClick(section.SIXTH)}
              className={styleSCSS.draw}
            >
              Anterior
            </button>
            <span>{7 + "/" + 14}</span>
            <button
              onClick={() => handleClick(section.EIGHTH)}
              className={styleSCSS.draw}
            >
              Próximo
            </button>
          </div>
        </div>

        <div id={section.EIGHTH} className={styleSCSS.evidence_main_container}>
          <div className={styleSCSS.title}>
            Itens fechados no último ciclo e suas evidências
          </div>

          <RenderEvidence data={fourthCicleEvidence} />

          <div className={styleSCSS.button_container}>
            <button
              onClick={() => handleClick(section.SEVENTH)}
              className={styleSCSS.draw}
            >
              Anterior
            </button>
            <span>{8 + "/" + 14}</span>
            <button
              onClick={() => handleClick(section.FOURTEEN)}
              className={styleSCSS.draw}
            >
              Próximo
            </button>
          </div>
        </div>

        <div
          id={section.FOURTEEN}
          className={styleSCSS.evidence_main_container}
        >
          <div className={styleSCSS.title}>Aprendizados</div>

          <RenderEvidence data={learningEvidence} />

          <div className={styleSCSS.button_container}>
            <button
              onClick={() => handleClick(section.EIGHTH)}
              className={styleSCSS.draw}
            >
              Anterior
            </button>
            <span>{9 + "/" + 14}</span>
            <button
              onClick={() => handleClick(section.NINETH)}
              className={styleSCSS.draw}
            >
              Próximo
            </button>
          </div>
        </div>

        <div id={section.NINETH} className={styleSCSS.evidence_main_container}>
          <div className={styleSCSS.title}>
            PDI - Plano de Desenvolvimento Individual
          </div>

          <RenderEvidence data={nextStepEvidence} />

          <div className={styleSCSS.button_container}>
            <button
              onClick={() => handleClick(section.FOURTEEN)}
              className={styleSCSS.draw}
            >
              Anterior
            </button>
            <span>{10 + "/" + 14}</span>
            <button
              onClick={() => handleClick(section.TENTH)}
              className={styleSCSS.draw}
            >
              Próximo
            </button>
          </div>
        </div>

        <div id={section.TENTH} className={styleSCSS.container_tenth}>
          <div className={styleSCSS.title}>
            PDI - Plano de Desenvolvimento Individual
          </div>
          <div className={styleSCSS.container_images}>
            <div className={styleSCSS.container_image_subtitle}>
              <Image
                src="/images/level.jpeg"
                height={100}
                width={468}
                alt="level"
              />
              <span className={styleSCSS.subtitle}>
                Antes: <b>47% Junior Engineer</b> <br />
                (não lançado no sistema)
              </span>
            </div>
            <div className={styleSCSS.container_image_radar}>
              <Image
                className={styleSCSS.image}
                src="/images/radar.jpeg"
                height={332}
                width={344}
                alt="radar"
              />
            </div>
          </div>
          <div className={styleSCSS.button_container}>
            <button
              onClick={() => handleClick(section.NINETH)}
              className={styleSCSS.draw}
            >
              Anterior
            </button>
            <span>{11 + "/" + 14}</span>
            <button
              onClick={() => handleClick(section.ELEVENTH)}
              className={styleSCSS.draw}
            >
              Próximo
            </button>
          </div>
        </div>

        <div id={section.ELEVENTH} className={styleSCSS.container_eleventh}>
          <div className={styleSCSS.title}>Avaliação 360º</div>
          <div className={styleSCSS.container_images}>
            <div className={styleSCSS.container_number}>
              <Image
                src="/images/number.jpeg"
                height={150}
                width={368}
                alt="number"
              />
            </div>
            <Image
              className={styleSCSS.image}
              src="/images/roles.jpeg"
              height={192}
              width={242}
              alt="roles"
            />
          </div>
          <div className={styleSCSS.button_container}>
            <button
              onClick={() => handleClick(section.TENTH)}
              className={styleSCSS.draw}
            >
              Anterior
            </button>
            <span>{12 + "/" + 14}</span>
            <button
              onClick={() => handleClick(section.TWELFTH)}
              className={styleSCSS.draw}
            >
              Próximo
            </button>
          </div>
        </div>

        <div id={section.TWELFTH} className={styleSCSS.container_twelfth}>
          <div className={styleSCSS.title}>Avaliação 360º</div>
          <div className={styleSCSS.container_image}>
            <Image
              src="/images/cloudwords.jpeg"
              height={261}
              width={398}
              alt="cloudwords"
            />
          </div>
          <div className={styleSCSS.button_container}>
            <button
              onClick={() => handleClick(section.ELEVENTH)}
              className={styleSCSS.draw}
            >
              Anterior
            </button>
            <span>{13 + "/" + 14}</span>
            <button
              onClick={() => handleClick(section.THIRTEENTH)}
              className={styleSCSS.draw}
            >
              Próximo
            </button>
          </div>
        </div>

        <div id={section.THIRTEENTH} className={styleSCSS.container_thirteenth}>
          <div className={styleSCSS.website}>
            <a href="https://ciandt.com/br/">ciandt.com.br</a>
          </div>
          <div className={styleSCSS.thanks}>Obrigado!</div>
          <div className={styleSCSS.container_image}>
            <Image src="/images/ciandt.png" height={30} width={90} alt="Logo" />
            <span>
              Driven by <b>Impact</b>
            </span>
          </div>
          <div className={styleSCSS.button_container}>
            <button
              onClick={() => handleClick(section.TWELFTH)}
              className={styleSCSS.draw}
            >
              Anterior
            </button>
            <span>{14 + "/" + 14}</span>
            <button
              onClick={() => handleClick(section.FIRST)}
              className={styleSCSS.draw}
            >
              Inicio
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

type RenderEvidenceProps = {
  data: {
    title: string;
    items: {
      id: number;
      description: string;
      bold: string;
    }[];
  }[];
};

const RenderEvidence: React.FC<RenderEvidenceProps> = ({ data }) => {
  return (
    <div className={styleSCSS.container_evidence}>
      {data.map((evidence, idx) => (
        <div
          key={`${evidence.title}-${idx}`}
          className={styleSCSS.evidence_border}
        >
          <div className={styleSCSS.evidence_title}>{evidence.title}</div>
          {evidence.items.map((item) => (
            <div
              key={`${evidence.title}-${item.id}`}
              className={styleSCSS.evidence_container}
            >
              <div className={styleSCSS.description}>
                &nbsp;&nbsp;&nbsp;&gt; {item.description}
                <span className={styleSCSS.bold}>{item.bold}</span>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
