import React from 'react'
import './qualifications.css'
// import {FaChessKing} from 'react-icons/fa'
// import {FaChessQueen} from 'react-icons/fa'
// import {FaChessKnight} from 'react-icons/fa'
// import {FaChessBishop} from 'react-icons/fa'
// import {FaChessRook} from 'react-icons/fa'
// import {FaChessPawn} from 'react-icons/fa'
import {FaUserGraduate} from 'react-icons/fa'
import {PiCertificateFill} from 'react-icons/pi'
import {FaBriefcase} from 'react-icons/fa'
import {AiFillCheckCircle} from 'react-icons/ai'


const qualifications = () => {
  return (
    <section id='qualifications'>
      
      <h5>My personal journey</h5>
      <h2>Qualifications</h2>

      <div className="container qualifications_container">
        <div className="qualifications_frontend">
          <div className='qualification-icon'>
            <FaUserGraduate/>
          </div>
          <h3>Academic Qualifications</h3>
          <div className="qualifications_content-ac">
            <article className='qualifications_details'>
              {/* <FaChessKing className='qualifications_details-icons' /> */}
              <div><h4>Bachelor of Science (Honours) in Science and Management (UG)</h4>
              <small className='text-light'>From Faculty of Science, University of Colombo.<br/><b>Subjects:</b> Computer Science, Information technology, Management science, Business studies, Finance, Chemistry, Botany, Zoology<br/>Designed to provide students with a solid background in science as well as a grounding in managerial skills</small></div>
            </article>

            <article className='qualifications_details'>
              {/* <FaChessQueen className='qualifications_details-icons'/> */}
              <div><h4>Bachelor of Information Technology (External) (UG)</h4>
              <small className='text-light'>From School of Computing, University of Colombo. <br/><b>Content:</b> Information technology, Computer science.</small></div>
            </article>

            <article className='qualifications_details'>
              {/* <FaChessKnight className='qualifications_details-icons'/> */}
              <div><h4>Diploma in Human Resource Management</h4>
              <small className='text-light'>From IMBS Green campus.<br/><b>Content:</b> Human resource management, Business management.</small></div>
            </article>

          </div>
        </div>

        <div className="qualifications_frontend">
            <div className='qualification-icon'>
                <FaBriefcase/>
            </div>
          <h3>Professional Qualifications</h3>
          <div className="qualifications_content-pc">
            <article className='qualifications_details'>
              {/* <FaChessRook className='qualifications_details-icons' /> */}
              <div><h4>Google Data Analytics Professional Certificate</h4> <h5>by Google inc.</h5>
              <small><a href='https://coursera.org/verify/'>coursera.org/verify/</a>
              <div className='certificate-content'>
                <ul className='text-light-pc'>
                  <li><div className='check-icon'><AiFillCheckCircle/></div>Foundations: Data, Data, Everywhere</li>
                  <li><div className='check-icon'><AiFillCheckCircle/></div>Ask Questions to Make Data-Driven Decisions</li>
                  <li><div className='check-icon'><AiFillCheckCircle/></div>Prepare Data for Exploration</li>
                  <li><div className='check-icon'><AiFillCheckCircle/></div>Process Data from Dirty to Clean</li>
                  <li><div className='check-icon'><AiFillCheckCircle/></div>Analyze Data to Answer Questions</li>
                  <li><div className='check-icon'><AiFillCheckCircle/></div>Share Data Through the Art of Visualization</li>
                  <li><div className='check-icon'><AiFillCheckCircle/></div>Data Analysis with R Programming</li>
                  <li><div className='check-icon'><AiFillCheckCircle/></div>Google Data Analytics Capstone: Complete a Case Study</li>
                </ul>
              </div>
              </small>
              
              </div>
            </article>

            <article className='qualifications_details'>
              {/* <FaChessRook className='qualifications_details-icons' /> */}
              <div><h4>IBM Data Analyst Professional Certificate</h4> <h5>by IBM</h5>
                <small><a href='https://coursera.org/verify/'>coursera.org/verify/</a>
                  <div className='certificate-content'>
                    <ul className='text-light-pc'>
                      <li><div className='check-icon'><AiFillCheckCircle/></div>Introduction to Data Analytics</li>
                      <li><div className='check-icon'><AiFillCheckCircle/></div>Excel Basics for Data Analysis</li>
                      <li><div className='check-icon'><AiFillCheckCircle/></div>Data Visualization and Dashboards with Excel and Cognos</li>
                      <li><div className='check-icon'><AiFillCheckCircle/></div>Python for Data Science, AI & Development</li>
                      <li><div className='check-icon'><AiFillCheckCircle/></div>Python Project for Data Science</li>
                      <li><div className='check-icon'><AiFillCheckCircle/></div>Databases and SQL for Data Science with Python</li>
                      <li><div className='check-icon'><AiFillCheckCircle/></div>Data Analysis with Python</li>
                      <li><div className='check-icon'><AiFillCheckCircle/></div>Data Visualization with Python</li>
                      <li><div className='check-icon'><AiFillCheckCircle/></div>IBM Data Analyst Capstone Project</li>
                    </ul>
                  </div>
                </small>         
              </div>
            </article>

            <article className='qualifications_details'>
              {/* <FaChessBishop className='qualifications_details-icons' /> */}
              <div><h4>SLIIT AI/ML Certificate</h4> <h5>by SLIIT Sri Lanka.</h5>
                <small><a href='https://coursera.org/verify/'>coursera.org/verify/</a>
                  <div className='certificate-content'>
                    <ul className='text-light-pc'>
                      <li><div className='check-icon'><AiFillCheckCircle/></div>SLIIT AI/ML Stage 1</li>
                      <li><div className='check-icon'><AiFillCheckCircle/></div>SLIIT AI/ML Stage 2</li>
                    </ul>
                  </div>
                </small>         
              </div>
            </article>

            <article className='qualifications_details'>
              {/* <FaChessRook className='qualifications_details-icons' /> */}
              <div><h4>Google Advanced Data Analytics Professional Certificate</h4> <h5>by Google inc.</h5>
                <small><a href='https://coursera.org/verify/'>coursera.org/verify/</a>
                  <div className='certificate-content'>
                    <ul className='text-light-pc'>
                      <li><div className='check-icon'><AiFillCheckCircle/></div>Foundations of Data Science</li>
                      <li><div className='check-icon'><AiFillCheckCircle/></div>Get Started with Python</li>
                      <li><div className='check-icon'><AiFillCheckCircle/></div>Go Beyond the Numbers: Translate Data into Insights</li>
                      <li><div className='check-icon'><AiFillCheckCircle/></div>The Power of Statistics</li>
                      <li><div className='check-icon'><AiFillCheckCircle/></div>Regression Analysis: Simplify Complex Data Relationships</li>
                      <li><div className='check-icon'><AiFillCheckCircle/></div>The Nuts and Bolts of Machine Learning</li>
                      <li><div className='check-icon'><AiFillCheckCircle/></div>Google Advanced Data Analytics Capstone</li>
                    </ul>
                  </div>
                </small>         
              </div>
            </article>

            <article className='qualifications_details'>
              {/* <FaChessKnight className='qualifications_details-icons' /> */}
              <div><h4>Google Business Intelligence Professional Certificate</h4> <h5>by Goole inc.</h5>
                <small><a href='https://coursera.org/verify/'>coursera.org/verify/</a>
                  <div className='certificate-content'>
                    <ul className='text-light-pc'>
                      <li><div className='check-icon'><AiFillCheckCircle/></div>Foundations of Business Intelligence</li>
                      <li><div className='check-icon'><AiFillCheckCircle/></div>The Path to Insights: Data Models and Pipelines</li>
                      <li><div className='check-icon'><AiFillCheckCircle/></div>Decisions, Decisions: Dashboards and Reports</li>
                    </ul>
                  </div>
                </small>         
              </div>
            </article>

            <article className='qualifications_details'>
              {/* <FaChessKnight className='qualifications_details-icons' /> */}
              <div><h4>Google Project Management: Professional Certificate</h4> <h5>by Google inc.</h5>
                <small><a href='https://coursera.org/verify/'>coursera.org/verify/</a>
                  <div className='certificate-content'>
                    <ul className='text-light-pc'>
                      <li><div className='check-icon'><AiFillCheckCircle/></div>Foundations of Project Management</li>
                      <li><div className='check-icon'><AiFillCheckCircle/></div>Project Initiation: Starting a Successful Project</li>
                      <li><div className='check-icon'><AiFillCheckCircle/></div>Project Planning: Putting It All Together</li>
                      <li><div className='check-icon'><AiFillCheckCircle/></div>Project Execution: Running the Project</li>
                      <li><div className='check-icon'><AiFillCheckCircle/></div>Agile Project Management</li>
                      <li><div className='check-icon'><AiFillCheckCircle/></div>Capstone: Applying Project Management in the Real World</li>
                    </ul>
                  </div>
                </small>         
              </div>
            </article>

            <article className='qualifications_details'>
              {/* <FaChessRook className='qualifications_details-icons' /> */}
              <div><h4>Mathematics for Machine Learning and Data Science Specialization</h4> <h5>by Deeplearning.Ai</h5>
                <small><a href='https://coursera.org/verify/'>coursera.org/verify/</a>
                  <div className='certificate-content'>
                    <ul className='text-light-pc'>
                      <li><div className='check-icon'><AiFillCheckCircle/></div>Linear Algebra for Machine Learning and Data Science</li>
                      <li><div className='check-icon'><AiFillCheckCircle/></div>Calculus for Machine Learning and Data Science</li>
                      <li><div className='check-icon'><AiFillCheckCircle/></div>Probability & Statistics for Machine Learning & Data Science</li>
                      
                    </ul>
                  </div>
                </small>         
              </div>
            </article>

            <article className='qualifications_details'>
              {/* <FaChessRook className='qualifications_details-icons' /> */}
              <div><h4>IBM Data Science Professional Certificate</h4> <h5>by IBM</h5>
                <small><a href='https://coursera.org/verify/'>coursera.org/verify/</a>
                  <div className='certificate-content'>
                    <ul className='text-light-pc'>
                      <li><div className='check-icon'><AiFillCheckCircle/></div>What is Data Science?</li>
                      <li><div className='check-icon'><AiFillCheckCircle/></div>Tools for Data Science</li>
                      <li><div className='check-icon'><AiFillCheckCircle/></div>Data Science Methodology</li>
                      <li><div className='check-icon'><AiFillCheckCircle/></div>Python for Data Science, AI & Development</li>
                      <li><div className='check-icon'><AiFillCheckCircle/></div>Python Project for Data Science</li>
                      <li><div className='check-icon'><AiFillCheckCircle/></div>Databases and SQL for Data Science with Python</li>
                      <li><div className='check-icon'><AiFillCheckCircle/></div>Data Analysis with Python</li>
                      <li><div className='check-icon'><AiFillCheckCircle/></div>Data Visualization with Python</li>
                      <li><div className='check-icon'><AiFillCheckCircle/></div>Machine Learning with Python</li>
                      <li><div className='check-icon'><AiFillCheckCircle/></div>Applied Data Science Capstone</li>
                    </ul>
                  </div>
                </small>         
              </div>
            </article>

            <article className='qualifications_details'>
              {/* <FaChessBishop className='qualifications_details-icons' /> */}
              <div><h4>IBM Data Engineering Professional Certificate</h4> <h5>by IBM</h5>
                <small><a href='https://coursera.org/verify/'>coursera.org/verify/</a>
                  <div className='certificate-content'>
                    <ul className='text-light-pc'>
                      <li><div className='check-icon'><AiFillCheckCircle/></div>Introduction to Data Engineering</li>
                      <li><div className='check-icon'><AiFillCheckCircle/></div>Python for Data Science, AI & Development</li>
                      <li><div className='check-icon'><AiFillCheckCircle/></div>Python Project for Data Engineering</li>
                      <li><div className='check-icon'><AiFillCheckCircle/></div>Introduction to Relational Databases (RDBMS)</li>
                      <li><div className='check-icon'><AiFillCheckCircle/></div>Databases and SQL for Data Science with Python</li>
                      <li><div className='check-icon'><AiFillCheckCircle/></div>Hands-on Introduction to Linux Commands and Shell Scripting</li>
                      <li><div className='check-icon'><AiFillCheckCircle/></div>Relational Database Administration (DBA)</li>
                      <li><div className='check-icon'><AiFillCheckCircle/></div>ETL and Data Pipelines with Shell, Airflow and Kafka</li>
                      <li><div className='check-icon'><AiFillCheckCircle/></div>Getting Started with Data Warehousing and BI Analytics</li>
                      <li><div className='check-icon'><AiFillCheckCircle/></div>Introduction to NoSQL Databases</li>
                      <li><div className='check-icon'><AiFillCheckCircle/></div>Introduction to Big Data with Spark and Hadoop</li>
                      <li><div className='check-icon'><AiFillCheckCircle/></div>Data Engineering and Machine Learning using Spark</li>
                      <li><div className='check-icon'><AiFillCheckCircle/></div>Data Engineering Capstone Project</li>
                    </ul>
                  </div>
                </small>         
              </div>
            </article>

            <article className='qualifications_details'>
              {/* <FaChessRook className='qualifications_details-icons' /> */}
              <div><h4>Advanced Data Science with IBM Specialization</h4> <h5>by IBM</h5>
                <small><a href='https://coursera.org/verify/'>coursera.org/verify/</a>
                  <div className='certificate-content'>
                    <ul className='text-light-pc'>
                      <li><div className='check-icon'><AiFillCheckCircle/></div>Fundamentals of Scalable Data Science</li>
                      <li><div className='check-icon'><AiFillCheckCircle/></div>Advanced Machine Learning and Signal Processing</li>
                      <li><div className='check-icon'><AiFillCheckCircle/></div>Applied AI with DeepLearning</li>
                      <li><div className='check-icon'><AiFillCheckCircle/></div>Advanced Data Science Capstone</li>
                      
                    </ul>
                  </div>
                </small>         
              </div>
            </article>

            <article className='qualifications_details'>
              {/* <FaChessBishop className='qualifications_details-icons' /> */}
              <div><h4>Deep Learning Specialization</h4> <h5>by DeepLearning.ai</h5>
                <small><a href='https://coursera.org/verify/'>coursera.org/verify/</a>
                  <div className='certificate-content'>
                    <ul className='text-light-pc'>
                      <li><div className='check-icon'><AiFillCheckCircle/></div>Neural Networks and Deep Learning</li>
                      <li><div className='check-icon'><AiFillCheckCircle/></div>Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization</li>
                      <li><div className='check-icon'><AiFillCheckCircle/></div>Structuring Machine Learning Projects</li>
                      <li><div className='check-icon'><AiFillCheckCircle/></div>Convolutional Neural Networks</li>
                      <li><div className='check-icon'><AiFillCheckCircle/></div>Sequence Models</li>
                      
                    </ul>
                  </div>
                </small>         
              </div>
            </article>

            {/* <article className='qualifications_details'>
              <FaChessBishop className='qualifications_details-icons' />
              <div><h4>Machine Learning Specialization</h4> <h5>by DeepLearning.Ai and Stanford University</h5>
                <small><a href='https://coursera.org/verify/'>coursera.org/verify/</a>
                  <div className='certificate-content'>
                    <ul className='text-light-pc'>
                      <li><div className='check-icon'><AiFillCheckCircle/></div>Supervised Machine Learning: Regression and Classification</li>
                      <li><div className='check-icon'><AiFillCheckCircle/></div>Advanced Learning Algorithms</li>
                      <li><div className='check-icon'><AiFillCheckCircle/></div>Unsupervised Learning, Recommenders, Reinforcement Learning</li>
                    </ul>
                  </div>
                </small>         
              </div>
            </article> */}

            <article className='qualifications_details'>
              {/* <FaChessBishop className='qualifications_details-icons' /> */}
              <div><h4>IBM Machine Learning Professional Certificate</h4> <h5>by IBM</h5>
                <small><a href='https://coursera.org/verify/'>coursera.org/verify/</a>
                  <div className='certificate-content'>
                    <ul className='text-light-pc'>
                      <li><div className='check-icon'><AiFillCheckCircle/></div>Exploratory Data Analysis for Machine Learning</li>
                      <li><div className='check-icon'><AiFillCheckCircle/></div>Supervised Machine Learning: Regression</li>
                      <li><div className='check-icon'><AiFillCheckCircle/></div>Supervised Machine Learning: Classification</li>
                      <li><div className='check-icon'><AiFillCheckCircle/></div>Unsupervised Machine Learning</li>
                      <li><div className='check-icon'><AiFillCheckCircle/></div>Deep Learning and Reinforcement Learning</li>
                      <li><div className='check-icon'><AiFillCheckCircle/></div>Machine Learning Capstone</li>
                      
                    </ul>
                  </div>
                </small>         
              </div>
            </article>

            <article className='qualifications_details'>
              {/* <FaChessBishop className='qualifications_details-icons' /> */}
              <div><h4>IBM AI Engineering Professional Certificate</h4> <h5>by IBM</h5>
                <small><a href='https://coursera.org/verify/'>coursera.org/verify/</a>
                  <div className='certificate-content'>
                    <ul className='text-light-pc'>
                      <li><div className='check-icon'><AiFillCheckCircle/></div>Machine Learning with Python</li>
                      <li><div className='check-icon'><AiFillCheckCircle/></div>Introduction to Deep Learning & Neural Networks with Keras</li>
                      <li><div className='check-icon'><AiFillCheckCircle/></div>Introduction to Computer Vision and Image Processing</li>
                      <li><div className='check-icon'><AiFillCheckCircle/></div>Deep Neural Networks with PyTorch</li>
                      <li><div className='check-icon'><AiFillCheckCircle/></div>Building Deep Learning Models with TensorFlow</li>
                      <li><div className='check-icon'><AiFillCheckCircle/></div>AI Capstone Project with Deep Learning</li>
                    </ul>
                  </div>
                </small>         
              </div>
            </article>

            {/* <article className='qualifications_details'>
              <FaChessBishop className='qualifications_details-icons' />
              <div><h4>IBM Applied AI Professional Certificate</h4> <h5>by IBM</h5>
                <small><a href='https://coursera.org/verify/'>coursera.org/verify/</a>
                  <div className='certificate-content'>
                    <ul className='text-light-pc'>
                      <li><div className='check-icon'><AiFillCheckCircle/></div>Introduction to Artificial Intelligence (AI)</li>
                      <li><div className='check-icon'><AiFillCheckCircle/></div>Getting Started with AI using IBM Watson</li>
                      <li><div className='check-icon'><AiFillCheckCircle/></div>Building AI Powered Chatbots Without Programming</li>
                      <li><div className='check-icon'><AiFillCheckCircle/></div>Python for Data Science, AI & Development</li>
                      <li><div className='check-icon'><AiFillCheckCircle/></div>Python Project for AI & Application Development</li>
                      <li><div className='check-icon'><AiFillCheckCircle/></div>Building AI Applications with Watson APIs</li>
                    </ul>
                  </div>
                </small>         
              </div>
            </article> */}

            <article className='qualifications_details'>
              {/* <FaChessBishop className='qualifications_details-icons' /> */}
              <div><h4>AWS AI/ML micro degree</h4> <h5>by Amazon Web Services</h5>
                <small><a href='https://coursera.org/verify/'>coursera.org/verify/</a>
                  <div className='certificate-content'>
                    {/*<ul className='text-light-pc'>
                      <li><div className='check-icon'><AiFillCheckCircle/></div></li>
                      <li><div className='check-icon'><AiFillCheckCircle/></div></li>
                      <li><div className='check-icon'><AiFillCheckCircle/></div></li>
                      <li><div className='check-icon'><AiFillCheckCircle/></div></li>
                      <li><div className='check-icon'><AiFillCheckCircle/></div></li>
                      <li><div className='check-icon'><AiFillCheckCircle/></div></li>
                      <li><div className='check-icon'><AiFillCheckCircle/></div></li>
                      <li><div className='check-icon'><AiFillCheckCircle/></div></li>
                      <li><div className='check-icon'><AiFillCheckCircle/></div></li>
  </ul>*/}
                  </div>
                </small>         
              </div>
            </article>

            {/* <article className='qualifications_details'>
              <FaChessKnight className='qualifications_details-icons' />
              <div><h4>Microsoft 365 Fundamentals Specialization</h4> <h5>by Microsoft</h5>
                <small><a href='https://coursera.org/verify/'>coursera.org/verify/</a>
                  <div className='certificate-content'>
                    <ul className='text-light-pc'>
                      <li><div className='check-icon'><AiFillCheckCircle/></div>Work Smarter with Microsoft Word</li>
                      <li><div className='check-icon'><AiFillCheckCircle/></div>Work Smarter with Microsoft Excel</li>
                      <li><div className='check-icon'><AiFillCheckCircle/></div>Work Smarter with Microsoft PowerPoint</li>
                      <li><div className='check-icon'><AiFillCheckCircle/></div>Work Smarter with Microsoft PowerPoint</li>
                    </ul>
                  </div>
                </small>         
              </div>
            </article> */}

          </div>
        </div>

        <div className="qualifications_frontend">
            <div className='qualification-icon'>
                <PiCertificateFill/>
            </div>
          <h3>Courses and Certifications</h3>
          <div className="qualifications_content-cert">
            <article className='qualifications_details'>
              {/* <FaChessPawn className='qualifications_details-icons' /> */}
              <div><h4>AI For Everyone</h4> <h5>by DeepLearning.AI</h5>
              <small className='text-light'><a href='https://coursera.org/verify/73JY9LV3DW3G'>coursera.org/verify/73JY9LV3DW3G</a></small></div>
            </article>

            <article className='qualifications_details'>
              {/* <FaChessPawn className='qualifications_details-icons' /> */}
              <div><h4>The Complete Web Developer in 2022: Zero to Mastery</h4> <h5>by Udemy</h5>
              <small className='text-light'><a></a></small></div>
            </article>

            <article className='qualifications_details'>
              {/* <FaChessPawn className='qualifications_details-icons' /> */}
              <div><h4>Programming for Everybody (Getting Started with Python)</h4> <h5>by University of Michigan</h5>
              <small className='text-light'><a href='https://coursera.org/verify/JLCE7MVD569Y'>coursera.org/verify/JLCE7MVD569Y</a></small></div>
            </article>

            <article className='qualifications_details'>
              {/* <FaChessPawn className='qualifications_details-icons' /> */}
              <div><h4>Business Analytics and Digital Media</h4> <h5>by Indian School of Business</h5>
              <small className='text-light'><a href='https://coursera.org/verify/YRM88V2BBM4D'>coursera.org/verify/YRM88V2BBM4D</a></small></div>
            </article>

            <article className='qualifications_details'>
              {/* <FaChessPawn className='qualifications_details-icons' /> */}
              <div><h4>A Crash Course in Data Science</h4> <h5>by Johns Hopkins University</h5>
              <small className='text-light'><a href='https://coursera.org/verify/PKTUPLFYFY2L'>coursera.org/verify/PKTUPLFYFY2L</a></small></div>
            </article>

            <article className='qualifications_details'>
              {/* <FaChessPawn className='qualifications_details-icons' /> */}
              <div><h4>Getting Started with AWS Machine Learning</h4> <h5>by Amazon Web Services</h5>
              <small className='text-light'><a href='https://coursera.org/verify/2L4G3FVGL9M7'>coursera.org/verify/2L4G3FVGL9M7</a></small></div>
            </article>

            <article className='qualifications_details'>
              {/* <FaChessPawn className='qualifications_details-icons' /> */}
              <div><h4>Introduction to Cloud Identity</h4> <h5>by Google Cloud Education</h5>
              <small className='text-light'><a href='https://coursera.org/verify/QE5B76XGEK8F'>coursera.org/verify/QE5B76XGEK8F</a></small></div>
            </article>

            <article className='qualifications_details'>
              {/* <FaChessPawn className='qualifications_details-icons' /> */}
              <div><h4>Graphic Design Masterclass - Learn GREAT Design</h4> <h5>by Udemy</h5>
              <small className='text-light'><a href='https://coursera.org/verify/73JY9LV3DW3G'></a></small></div>
            </article>

            <article className='qualifications_details'>
              {/* <FaChessPawn className='qualifications_details-icons' /> */}
              <div><h4>Digital Transformations</h4> <h5>by ISB</h5>
              <small className='text-light'><a href='https://coursera.org/verify/VBVE8FVSVKDP'>coursera.org/verify/VBVE8FVSVKDP</a></small></div>
            </article>

            <article className='qualifications_details'>
              {/* <FaChessPawn className='qualifications_details-icons' /> */}
              <div><h4>Successful Career Development</h4> <h5>by Kennesaw State University</h5>
              <small className='text-light'><a href='https://coursera.org/verify/M7VQZX6NXL9Q'>coursera.org/verify/M7VQZX6NXL9Q</a></small></div>
            </article>

            <article className='qualifications_details'>
              {/* <FaChessPawn className='qualifications_details-icons' /> */}
              <div><h4>Understanding Research Methods</h4> <h5>by University of London</h5>
              <small className='text-light'><a href='https://coursera.org/verify/XQ45SMJVWMUJ'>coursera.org/verify/XQ45SMJVWMUJ</a></small></div>
            </article>

            <article className='qualifications_details'>
              {/* <FaChessPawn className='qualifications_details-icons' /> */}
              <div><h4>Leadership and Emotional Intelligence</h4> <h5>by Indian School of Business</h5>
              <small className='text-light'><a href='https://coursera.org/verify/3GES4DSD9VBH'>coursera.org/verify/3GES4DSD9VBH</a></small></div>
            </article>

            <article className='qualifications_details'>
              {/* <FaChessPawn className='qualifications_details-icons' /> */}
              <div><h4>Communication Strategies for a Virtual Age</h4> <h5>University of Toronto</h5>
              <small className='text-light'><a href='https://coursera.org/verify/BKU9PV63WQ7S'>coursera.org/verify/BKU9PV63WQ7S</a></small></div>
            </article>

            <article className='qualifications_details'>
              {/* <FaChessPawn className='qualifications_details-icons' /> */}
              <div><h4>Creative Thinking: Techniques and Tools for Success</h4> <h5>by Imperial College London</h5>
              <small className='text-light'><a href='https://coursera.org/verify/X4ZDTHXSUC5W'>coursera.org/verify/X4ZDTHXSUC5W</a></small></div>
            </article>

            <article className='qualifications_details'>
              {/* <FaChessPawn className='qualifications_details-icons' /> */}
              <div><h4>Financial Markets</h4> <h5>by Yale University</h5>
              <small className='text-light'><a href='https://coursera.org/verify/K3RZEEYDLJKY'>coursera.org/verify/K3RZEEYDLJKY</a></small></div>
            </article>

            <article className='qualifications_details'>
              {/* <FaChessPawn className='qualifications_details-icons' /> */}
              <div><h4>Brand Management: Aligning Business, Brand and Behavior</h4> <h5>by University of London</h5>
              <small className='text-light'><a href='https://coursera.org/verify/QWA66JHV68GU'>coursera.org/verify/QWA66JHV68GU</a></small></div>
            </article>

            <article className='qualifications_details'>
              {/* <FaChessPawn className='qualifications_details-icons' /> */}
              <div><h4>Effective Problem-Solving and Decision-Making</h4> <h5>by University of California, Irvine</h5>
              <small className='text-light'><a href='https://coursera.org/verify/D25XK2LTBP3C'>coursera.org/verify/D25XK2LTBP3C</a></small></div>
            </article>

            <article className='qualifications_details'>
              {/* <FaChessPawn className='qualifications_details-icons' /> */}
              <div><h4>Essentials of Entrepreneurship: Thinking & Action</h4> <h5>by UCI</h5>
              <small className='text-light'><a href='https://coursera.org/verify/ZC676MT4EAYA'>coursera.org/verify/ZC676MT4EAYA</a></small></div>
            </article>

            <article className='qualifications_details'>
              {/* <FaChessPawn className='qualifications_details-icons' /> */}
              <div><h4>Fundamentals of Network Communication</h4> <h5>by University of Colorado</h5>
              <small className='text-light'><a href='https://coursera.org/verify/AZ3C5HV4TP9Y'>coursera.org/verify/AZ3C5HV4TP9Y</a></small></div>
            </article>

            <article className='qualifications_details'>
              {/* <FaChessPawn className='qualifications_details-icons' /> */}
              <div><h4>Initiating and Planning Projects</h4> <h5>by University of California, Irvine</h5>
              <small className='text-light'><a href='https://coursera.org/verify/3SYSEB4XNX4T'>coursera.org/verify/3SYSEB4XNX4T</a></small></div>
            </article>

            <article className='qualifications_details'>
              {/* <FaChessPawn className='qualifications_details-icons' /> */}
              <div><h4>Leading Teams</h4> <h5>by University of Michigan</h5>
              <small className='text-light'><a href='https://coursera.org/verify/7JJ8UVLYVRXL'>coursera.org/verify/7JJ8UVLYVRXL</a></small></div>
            </article>

            <article className='qualifications_details'>
              {/* <FaChessPawn className='qualifications_details-icons' /> */}
              <div><h4>Managing Employee Performance</h4> <h5>by University of Minnesota</h5>
              <small className='text-light'><a href='https://coursera.org/verify/GZ86LWZLQ7Z9'>coursera.org/verify/GZ86LWZLQ7Z9</a></small></div>
            </article>

            <article className='qualifications_details'>
              {/* <FaChessPawn className='qualifications_details-icons' /> */}
              <div><h4>Marketing in a Digital World</h4> <h5>by University of Illinois at Urbana-Champaign</h5>
              <small className='text-light'><a href='https://coursera.org/verify/NCVMW4FPZGSH'>coursera.org/verify/NCVMW4FPZGSH</a></small></div>
            </article>

            <article className='qualifications_details'>
              {/* <FaChessPawn className='qualifications_details-icons' /> */}
              <div><h4>Moratuwa open learn certification program</h4> <h5>by University of Moratuwa</h5>
              <small className='text-light'><a href='https://'>verify/NCVMW4FPZGSH</a></small></div>
            </article>

            
          </div>
        </div>


      </div>
    </section>
  )
}

export default qualifications

