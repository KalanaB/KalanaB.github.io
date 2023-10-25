import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

import {SiHtml5} from 'react-icons/si'
import {SiCss3} from 'react-icons/si'
import {SiJavascript} from 'react-icons/si'
import {SiBootstrap} from 'react-icons/si'
import {SiReact} from 'react-icons/si'

import {TbBrandMysql} from 'react-icons/tb'
import {RiFileExcel2Fill} from 'react-icons/ri'
import {SiGooglesheets} from 'react-icons/si'
import {SiPython} from 'react-icons/si'
import {SiTableau} from 'react-icons/si'
import {SiR} from 'react-icons/si'
import {SiPowerbi} from 'react-icons/si'
import {SiNumpy} from 'react-icons/si'
import {SiPandas} from 'react-icons/si'

import {SiTensorflow} from 'react-icons/si'
import {SiKeras} from 'react-icons/si'
import {SiApachespark} from 'react-icons/si'
import {SiAmazonaws} from 'react-icons/si'
import {SiDocker} from 'react-icons/si'

import {SiJira} from 'react-icons/si'
import {SiMicrosoftteams} from 'react-icons/si'
import {DiScrum} from 'react-icons/di'
import {PiKanbanFill} from 'react-icons/pi'
import {SiGoogle} from 'react-icons/si'


import {SiMongodb} from 'react-icons/si'
import {SiDjango} from 'react-icons/si'
import {SiGit} from 'react-icons/si'


const experience = () => {
  return (
    <section id='experience'>
      <h5>What skills I have</h5>
      <h2>Experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
            <div className='exp-icons'>
              <SiHtml5 style={{ marginRight: '7px' }}/> 
              <SiCss3 style={{ marginRight: '7px' }}/>
              <SiJavascript style={{ marginRight: '7px' }}/>
              <SiBootstrap style={{ marginRight: '7px' }}/>
              <SiReact />
            </div>
          <div className="experience_content">
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icons' />
              <div><h4>HTML</h4>
              <small className='text-light'>Beginer</small></div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icons'/>
              <div><h4>CSS</h4>
              <small className='text-light'>Beginer</small></div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icons'/>
              <div><h4>JavaScript</h4>
              <small className='text-light'>Beginer</small></div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icons'/>
              <div><h4>Bootsrap</h4>
              <small className='text-light'>Beginer</small></div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icons'/>
              <div><h4>React</h4>
              <small className='text-light'>Beginer</small></div>
            </article>
          </div>
        </div>

        <div className="experience_frontend">
          <h3>Data Analysis</h3>
          <div className='exp-icons'>
              <TbBrandMysql style={{ marginRight: '7px' }}/> 
              <RiFileExcel2Fill style={{ marginRight: '7px' }}/>
              <SiGooglesheets style={{ marginRight: '7px' }}/>
              <SiPython style={{ marginRight: '7px' }}/>
              <SiTableau style={{ marginRight: '7px' }}/>
              <SiR style={{ marginRight: '7px' }}/>
              <SiPowerbi style={{ marginRight: '7px' }}/>
              <SiNumpy style={{ marginRight: '7px' }}/>
              <SiPandas />
            </div>
          <div className="experience_content">
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icons' />
              <div><h4>SQL</h4>
              <small className='text-light'>Beginer</small></div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icons'/>
              <div><h4>Excel</h4>
              <small className='text-light'>Beginer</small></div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icons'/>
              <div><h4>GoogleSheets</h4>
              <small className='text-light'>Beginer</small></div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icons'/>
              <div><h4>Python</h4>
              <small className='text-light'>Beginer</small></div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icons'/>
              <div><h4>R</h4>
              <small className='text-light'>Beginer</small></div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icons'/>
              <div><h4>Tableau</h4>
              <small className='text-light'>Beginer</small></div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icons'/>
              <div><h4>Power BI</h4>
              <small className='text-light'>Beginer</small></div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icons'/>
              <div><h4>NumPy</h4>
              <small className='text-light'>Beginer</small></div>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icons'/>
              <div><h4>Pandas</h4>
              <small className='text-light'>Beginer</small></div>
            </article>
          </div>
        </div>

        <div className="experience_frontend">
          <h3>AI/ML</h3>
          <div className='exp-icons'>
              <SiTensorflow style={{ marginRight: '7px' }}/> 
              <SiKeras style={{ marginRight: '7px' }}/>
              <SiApachespark style={{ marginRight: '7px' }}/>
              <SiAmazonaws style={{ marginRight: '7px' }}/>
              <SiDocker />
            </div>
          <div className="experience_content">
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icons' />
              <div><h4>TensorFlow</h4>
              <small className='text-light'>Beginer</small></div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icons'/>
              <div><h4>Keras</h4>
              <small className='text-light'>Beginer</small></div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icons'/>
              <div><h4>ApacheSpark</h4>
              <small className='text-light'>Beginer</small></div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icons'/>
              <div><h4>AWS</h4>
              <small className='text-light'>Beginer</small></div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icons'/>
              <div><h4>Docker</h4>
              <small className='text-light'>Beginer</small></div>
            </article>
          </div>
        </div>

        <div className="experience_frontend">
          <h3>Project Management</h3>
          <div className='exp-icons'>
              <SiJira style={{ marginRight: '7px' }}/> 
              <SiMicrosoftteams style={{ marginRight: '7px' }}/>
              <DiScrum style={{ marginRight: '7px' }}/>
              <PiKanbanFill style={{ marginRight: '7px' }}/>
              <SiGoogle />
            </div>
          
          <div className="experience_content">
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icons' />
              <div><h4>Jira</h4>
              <small className='text-light'>Beginer</small></div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icons'/>
              <div><h4>MSTeams</h4>
              <small className='text-light'>Beginer</small></div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icons'/>
              <div><h4>Scrum</h4>
              <small className='text-light'>Beginer</small></div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icons'/>
              <div><h4>Kanban</h4>
              <small className='text-light'>Beginer</small></div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icons'/>
              <div><h4>GoogleDocs</h4>
              <small className='text-light'>Beginer</small></div>
            </article>
          </div>
        </div>

        <div className="experience_frontend">
          <h3>Data Science</h3>
          <div className='exp-icons'>
              <TbBrandMysql style={{ marginRight: '7px' }}/> 
              <SiR style={{ marginRight: '7px' }}/>
              <SiTableau style={{ marginRight: '7px' }}/>
              <SiNumpy style={{ marginRight: '7px' }}/>
              <SiApachespark />
            </div>
          
          <div className="experience_content">
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icons' />
              <div><h4>SQL</h4>
              <small className='text-light'>Beginer</small></div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icons'/>
              <div><h4>R</h4>
              <small className='text-light'>Beginer</small></div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icons'/>
              <div><h4>Tableau</h4>
              <small className='text-light'>Beginer</small></div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icons'/>
              <div><h4>NumPy</h4>
              <small className='text-light'>Beginer</small></div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icons'/>
              <div><h4>ApacheSpark</h4>
              <small className='text-light'>Beginer</small></div>
            </article>
          </div>
        </div>

        <div className="experience_frontend">
          <h3>Business Analysis</h3>
          <div className='exp-icons'>
              <TbBrandMysql style={{ marginRight: '7px' }}/> 
              <SiTableau style={{ marginRight: '7px' }}/>
              <SiPowerbi style={{ marginRight: '7px' }}/>             
              <RiFileExcel2Fill />
            </div>
          
          <div className="experience_content">
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icons' />
              <div><h4>SQL</h4>
              <small className='text-light'>Beginer</small></div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icons'/>
              <div><h4>Tableau</h4>
              <small className='text-light'>Beginer</small></div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icons'/>
              <div><h4>Power BI</h4>
              <small className='text-light'>Beginer</small></div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icons'/>
              <div><h4>QlikView</h4>
              <small className='text-light'>Beginer</small></div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icons'/>
              <div><h4>Excel</h4>
              <small className='text-light'>Beginer</small></div>
            </article>
          </div>
        </div>
        

        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className='exp-icons'>
              <TbBrandMysql style={{ marginRight: '7px' }}/> 
              <SiPython style={{ marginRight: '7px' }}/>
              <SiMongodb style={{ marginRight: '7px' }}/>
              <SiDjango style={{ marginRight: '7px' }}/>
              <SiGit />
            </div>
          
          <div className="experience_content">
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icons'/>
              <div><h4>MySQL</h4>
              <small className='text-light'>Beginer</small></div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icons'/>
              <div><h4>Python</h4>
              <small className='text-light'>Beginer</small></div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icons'/>
              <div><h4>MongoDB</h4>
              <small className='text-light'>Beginer</small></div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icons'/>
              <div><h4>Django</h4>
              <small className='text-light'>Beginer</small></div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icons'/>
              <div><h4>Git</h4>
              <small className='text-light'>Beginer</small></div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default experience