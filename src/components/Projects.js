import "./Projects.css";

export const Projects = () => {
    return (
        <div>
            <h1>Projects</h1>
            <hr/>

            <div className={"project-container"}>
                <div className={"project"}>
                    <h3>Construct an AI based stock market index – Final year
                        Research (UoC)</h3>
                    <p className={"project-description"}>A new stock market index for the CSE was constructed using AI based techniques
                        such as NLP, sentiment analysis and neural networks. The new index was free float
                        adjusted to better reflect the stock market behaviour. The Python was used as the
                        programming language. This research has been published on <a target={"_blank"} href={"https://www.slaas.lk/images/annual_sessions/proceedings/Part_I_Abstracts_2022_SLAAS.pdf"}> SLAAS Annual sessions 2022 </a> </p>
                </div>

                <div className={"project"}>
                    <h3>A Web platform with multiple online Tools – Tools Master</h3>
                    <p className={"project-description"}>This project was developed based on my own idea. <a target={"_blank"} href={"https://toolsmasteronline.com/"}>Tools Master</a> is a free online
                        platform with multiple online tools. At the moment it consists with multiple video
                        downloaders, paraphrasing tool and a summarization tool. All these are API based
                        tools and platform was developed using React and tailwind CSS.</p>
                </div>

                <div className={"project"}>
                    <h3>Predicting COVID-19 using ML and implement it as a mobile app.</h3>
                    <p className={"project-description"}>
                        <a target={"_blank"} href={"https://www.kaggle.com/datasets/hemanthhari/symptoms-and-covid-presence"}>Symptoms and COVID Presence </a>data set was used to predict the presence of
                        COVID19 using ML. Python language was used to construct <a target={"_blank"} href={"https://www.kaggle.com/code/sachinthadilshan/notebookcb7e0a5759/notebook"}> the model </a> and
                        practically implemented it using a <a target={"_blank"} href={"https://bitbucket.org/SachinthaDilshan96/symptomate/"}> mobile app </a>which was developed using reactnative.
                        SVM, RF, ANN and XGB algorithms were used to model the dataset and XGB
                        could predict the presence of COVID19 around 90% of success.
                    </p>
                </div>

                <div className={"project"}>
                    <h3>MyShopApp - A simple customer management System</h3>
                    <p className={"project-description"}> <a target={"_blank"} href={"https://github.com/SachinthaDilshan96/MyShopApp"}>This project </a>was implemented using Java and MySql database. The System's UI was
                        developed using JavaFX and MySql was used as the database. OOP concepts and
                        SOLID principles were applied where necessary. Layered architecture was used in
                        the project and CRUD operations for customers, items and users were implemented
                        using JDBC.</p>
                </div>

                <div className={"project"}>
                    <h3>Heart disease prediction using ML</h3>
                    <p className={"project-description"}><a target={"_blank"} href={"https://www.kaggle.com/datasets/dileep070/heart-disease-prediction-using-logistic-regression"}> The Cardiovascular dataset </a> was used to predict the heart disease using ML. Logistic
                        regression, RF, XGB and DT were used to model the dataset. Python Language was
                        used for the project and could achieve an accuracy around 90%.</p>
                </div>

                <div className={"project"}>
                    <h3>Predicting True value of cars</h3>
                    <p className={"project-description"}><a target={"_blank"} href={"https://www.kaggle.com/code/sachinthadilshan/notebookdd591de8c1/data"}>A data set with car options and prices </a>was used to construct a ML model to predict
                        the price of a used car. Linear regression, RF and many other models were used and
                        the lowest RSS was given by RF.</p>
                </div>

                <section className={"spam"}>
                    <div className={"project"}>
                        <h3>Predict Potential Spammers on Fiverr (Kaggle Competition)</h3>
                        <p className={"project-description"}>This project was done as submission for the Kaggle Competition to <a target={"_blank"} href={"https://www.kaggle.com/competitions/predict-potential-spammers-on-fiverr"}>Predict Potential Spammers on Fiverr. </a>
                            Random Forest and XGB Classifier were used to predict the
                            spam behavior and 98% score could be achieved for the final submission. My
                            submission was ranked for 87th place from all the competitors around the world.</p>
                    </div>
                </section>
            </div>
       </div>
    )
}
