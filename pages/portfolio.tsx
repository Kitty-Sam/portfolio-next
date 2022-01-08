import MainLayout from "../components/MainLayout";
import styles from "../styles/Portfolio.module.css";


const Portfolio = () => {
    return (
        <MainLayout title={'Portfolio project'}>
          <div>
                <h2 className={styles.header}>Portfolio projects</h2>
           <div className={styles.projectsWrapper}>
                  <div className={styles.projects}>
                    <div>todolist</div>
                    <div>game "Cards"</div>
                    <div>socialNetwork</div>
                </div>
              </div>
            </div>


        </MainLayout>
    );
};

export default Portfolio;