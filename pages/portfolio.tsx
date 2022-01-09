import MainLayout from "../components/MainLayout";
import styles from "../styles/Portfolio.module.css";
import Image from "next/image";


const Portfolio = () => {
    return (
        <MainLayout title={'Portfolio project'}>
          <div>
                <h2 className={styles.header}>Portfolio projects</h2>
           <div className={styles.projectsWrapper}>
                  <div className={styles.projects}>
                    <div style={{padding: "0 0.2em"}}>todolist
                    <Image
                          src='/todo.png' alt={'todo'}
                          width='80px' height='80px'/></div>

                    <div style={{padding: "0 0.2em"}}>game "Cards"
                     <Image
                          src='/questions.png' alt={'questions'}
                          width='120px' height='120px'/></div>

                </div>
              </div>
            </div>


        </MainLayout>
    );
};

export default Portfolio;