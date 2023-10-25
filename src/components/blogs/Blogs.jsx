import React from 'react'
import './blogs.css'
import AVTR1 from '../../assets/safar-safarov-MSN8TFhJ0is-unsplash.jpg'
import AVTR2 from '../../assets/beautiful-shot-corals-fish-clear-blue-ocean.jpg'
import AVTR3 from '../../assets/standing-futuristic-cyborg-illuminated-by-blue-machinery-generated-by-ai.jpg'
import AVTR4 from '../../assets/woman-virtual-reality-glasses-smart-technology.jpg'
import AVTR5 from '../../assets/professional-scientist-wearing-virtual-reality-glasses-using-medical-inovation-lab-team-researchers-working-with-equipment-device-future-medicine-healthcare-professional-vision-simulator.jpg'
import AVTR6 from '../../assets/one-woman-elegance-colorful-autumn-nature-generative-ai.jpg'
import AVTR7 from '../../assets/young-woman-embodies-glamour-sensuality-generative-ai.jpg'
import AVTR8 from '../../assets/3d-rendering-biorobots-concept.jpg'
import AVTR9 from '../../assets/website-development.jpg'
import AVTR10 from '../../assets/man-filming-with-professional-camera.jpg'
import AVTR11 from '../../assets/elephant-with-feathers-its-head-is-shown.jpg'
import AVTR12 from '../../assets/one-young-woman-blue-portrait-underwater-creativity-generated-by-ai.jpg'
import AVTR13 from '../../assets/hand-shaking-hand-with-word-it-bottom.jpg'
import AVTR15 from '../../assets/cancer-cell-magnified-blue-underwater-reef-generated-by-ai.jpg'
import AVTR16 from '../../assets/carlos-muza-hpjSkU2UYSU-unsplash.jpg'
import AVTR17 from '../../assets/christopher-gower-m_HRfLhgABo-unsplash.jpg'
import AVTR18 from '../../assets/ash-from-modern-afflatus-NQ6Lh81BTRs-unsplash.jpg'
import AVTR19 from '../../assets/andrew-neel-A9Msi-vUNKg-unsplash.jpg'
import AVTR20 from '../../assets/anete-lusina-zwsHjakE_iI-unsplash.jpg'
import AVTR21 from '../../assets/maximalfocus-0n4jhVGS4zs-unsplash.jpg'
import AVTR22 from '../../assets/caspar-camille-rubin-fPkvU7RDmCo-unsplash.jpg'


import {BsArrowRightShort} from 'react-icons/bs'

// import Swiper core and required modules
import { Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const blogs = () => {
  return (
    <section id='blogs'>
      <h5>My articles</h5>
      <h2>Blogs</h2>

      <Swiper className='container blogs_container' 
      // install Swiper modules
      modules={[Pagination, A11y]}
      spaceBetween={40}
      slidesPerView={2}
      pagination={{ clickable: true }}>

        <SwiperSlide className='blogs'>
          <div className='blogs_avatar'>
            <img src={AVTR1} alt='avatar' />
          </div>
          <h5 className='blogs_name'>GPT-Engineer: Revolutionizing Code Generation with a Single Prompt</h5>
          <h6 className='blogs_name-sub'>Use Cases and Real-World Applications of GPT-Engineer</h6>
          <p className='blogs_discription'>In today’s fast-paced world of software development, efficiency and speed are key factors in delivering high-quality applications. Traditional methods of coding can be time-consuming and labour-intensive, requiring manual creation of files, setup of project environments, and writing extensive lines of code. However, a new tool has emerged that promises to revolutionize the way we develop applications. Introducing GPT-Engineer, a cutting-edge solution that allows you to generate an entire codebase with just one prompt!</p>
          <a  href='https://medium.com/@kalanabandaranayake/gpt-engineer-revolutionizing-code-generation-with-a-single-prompt-50354879666f' target='_blank'>
                <div className='goto_link'>
                    <div className='blogs_btn-goto'>Go to</div>
                    <div className='blogs_btn-icon'>
                        <BsArrowRightShort/>
                    </div>
                </div>    
            </a>           
        </SwiperSlide>

        <SwiperSlide className='blogs'>
          <div className='blogs_avatar'>
            <img src={AVTR2} alt='avatar' />
          </div>
          <h5 className='blogs_name'>Exploring the Depths</h5>
          <h6 className='blogs_name-sub'>Unveiling the Secrets of the Titanic Wreckage</h6>
          <p className='blogs_discription'>The sinking of the RMS Titanic in 1912 has captivated the world for over a century. As one of the most iconic maritime disasters in history, the Titanic continues to fascinate explorers and researchers. Resting at the bottom of the North Atlantic Ocean, the wreckage of the Titanic holds valuable insights into the past. Let's delve into the depths of the ocean to explore the secrets of the Titanic wreck.</p>
          <a  href='https://medium.com/@kalanabandaranayake/exploring-the-depths-unveiling-the-secrets-of-the-titanic-wreckage-43541db092e3' target='_blank'>
                <div className='goto_link'>
                    <div className='blogs_btn-goto'>Go to</div>
                    <div className='blogs_btn-icon'>
                        <BsArrowRightShort/>
                    </div>
                </div>    
            </a>           
        </SwiperSlide>

        <SwiperSlide className='blogs'>
          <div className='blogs_avatar'>
            <img src={AVTR3} alt='avatar' />
          </div>
          <h5 className='blogs_name'>Beyond the Hype: Separating Facts from Fiction in Artificial Intelligence</h5>
          <p className='blogs_discription'>Artificial Intelligence (AI) has become a buzzword in today’s tech-driven world. It promises to revolutionize industries, improve efficiency, and enhance our daily lives. However, amidst all the hype surrounding AI, it is crucial to separate fact from fiction. In this story, we will delve deep into the world of AI, exploring its capabilities, limitations, and debunking common misconceptions. So let’s embark on this journey of discovery and unravel the truth behind the fascinating realm of artificial intelligence.</p>
          <a  href='https://medium.com/@kalanabandaranayake/beyond-the-hype-separating-fact-from-fiction-in-artificial-intelligence-38d4401332c7' target='_blank'>
                <div className='goto_link'>
                    <div className='blogs_btn-goto'>Go to</div>
                    <div className='blogs_btn-icon'>
                        <BsArrowRightShort/>
                    </div>
                </div>    
            </a>           
        </SwiperSlide>

        <SwiperSlide className='blogs'>
          <div className='blogs_avatar'>
            <img src={AVTR4} alt='avatar' />
          </div>
          <h5 className='blogs_name'>Data-Driven Music</h5>
          <h6 className='blogs_name-sub'>How AI is Shaping the Future of Sound</h6>
          <p className='blogs_discription'>In this digital age, technology is rapidly transforming every aspect of our lives, including the way we create and consume music. Artificial Intelligence (AI) has emerged as a powerful tool that is revolutionizing the music industry. From composing melodies to generating personalized playlists, AI is driving the development of data-driven music. Here, we will explore the fascinating world of data-driven music and how AI is shaping the future of sound.</p>
          <a  href='https://medium.com/@kalanabandaranayake/data-driven-music-how-ai-is-shaping-the-future-of-sound-7423db8a12c5' target='_blank'>
                <div className='goto_link'>
                    <div className='blogs_btn-goto'>Go to</div>
                    <div className='blogs_btn-icon'>
                        <BsArrowRightShort/>
                    </div>
                </div>    
            </a>           
        </SwiperSlide>

        <SwiperSlide className='blogs'>
          <div className='blogs_avatar'>
            <img src={AVTR5} alt='avatar' />
          </div>
          <h5 className='blogs_name'>Transforming Healthcare with Data Science</h5>
          <h6 className='blogs_name-sub'>Applications of AI and ML in Medical Diagnosis</h6>
          <p className='blogs_discription'>The field of healthcare has witnessed remarkable advancements in recent years, thanks to the rapid progress in data science, artificial intelligence (AI), and machine learning (ML). These technologies have paved the way for significant improvements in medical diagnosis, allowing healthcare professionals to provide more accurate and timely assessments of patients’ conditions. Here, we will explore the transformative impact of data science, AI, and ML in healthcare, with a particular focus on their applications in medical diagnosis.</p>
          <a  href='https://medium.com/@kalanabandaranayake/transforming-healthcare-with-data-science-applications-of-ai-and-ml-in-medical-diagnosis-bf4f54d3596e' target='_blank'>
                <div className='goto_link'>
                    <div className='blogs_btn-goto'>Go to</div>
                    <div className='blogs_btn-icon'>
                        <BsArrowRightShort/>
                    </div>
                </div>    
            </a>           
        </SwiperSlide>

        <SwiperSlide className='blogs'>
          <div className='blogs_avatar'>
            <img src={AVTR6} alt='avatar' />
          </div>
          <h5 className='blogs_name'>From Pixels to Masterpieces</h5>
          <h6 className='blogs_name-sub'>Understanding Deep Learning in Image Generation</h6>
          <p className='blogs_discription'>Artificial intelligence has made remarkable progress in recent years, particularly in the field of deep learning. One of the fascinating applications of deep learning is image generation. With the advancement of technology, machines are now capable of creating stunning, lifelike images that blur the line between reality and imagination. Here, we will delve into the world of deep learning in image generation, exploring the underlying concepts, techniques, and wide-ranging applications.</p>
          <a  href='https://medium.com/@kalanabandaranayake/from-pixels-to-masterpieces-understanding-deep-learning-in-image-generation-1c7ec2653fb9' target='_blank'>
                <div className='goto_link'>
                    <div className='blogs_btn-goto'>Go to</div>
                    <div className='blogs_btn-icon'>
                        <BsArrowRightShort/>
                    </div>
                </div>    
            </a>           
        </SwiperSlide>

        <SwiperSlide className='blogs'>
          <div className='blogs_avatar'>
            <img src={AVTR7} alt='avatar' />
          </div>
          <h5 className='blogs_name'>Artificial Intelligence in Fashion</h5>
          <h6 className='blogs_name-sub'>Revolutionizing the Way We Create and Shop</h6>
          <p className='blogs_discription'>Artificial intelligence (AI) has permeated various industries, revolutionizing the way we work, communicate, and interact with the world. From healthcare to finance, AI has made remarkable strides in transforming traditional practices and unlocking new possibilities. One such field that has been profoundly impacted by AI is fashion. The integration of AI into the fashion industry is revolutionizing the way we create, design, and shop for clothing. In this story, we will explore the fascinating world of AI in fashion and the transformative effects it has on the industry.</p>
          <a  href='https://medium.com/@kalanabandaranayake/artificial-intelligence-in-fashion-revolutionizing-the-way-we-create-and-shop-4371ec7f9866' target='_blank'>
                <div className='goto_link'>
                    <div className='blogs_btn-goto'>Go to</div>
                    <div className='blogs_btn-icon'>
                        <BsArrowRightShort/>
                    </div>
                </div>    
            </a>           
        </SwiperSlide>

        <SwiperSlide className='blogs'>
          <div className='blogs_avatar'>
            <img src={AVTR8} alt='avatar' />
          </div>
          <h5 className='blogs_name'>The Ethical Implications of Bias in Machine Learning Algorithms</h5>
          <h6 className='blogs_name-sub'>Unveiling the Shadows</h6>
          <p className='blogs_discription'>In today’s rapidly advancing technological landscape, machine learning algorithms play a crucial role in automating decision-making processes and providing valuable insights. However, as these algorithms become increasingly prevalent in various aspects of our lives, it is essential to examine the ethical implications they carry. One significant concern is the presence of bias in machine learning algorithms, which can lead to unfair outcomes and perpetuate existing social inequalities.</p>
          <a  href='https://medium.com/@kalanabandaranayake/the-ethical-implications-of-bias-in-machine-learning-algorithms-f9acfbbf9eb6' target='_blank'>
                <div className='goto_link'>
                    <div className='blogs_btn-goto'>Go to</div>
                    <div className='blogs_btn-icon'>
                        <BsArrowRightShort/>
                    </div>
                </div>    
            </a>           
        </SwiperSlide>

        <SwiperSlide className='blogs'>
          <div className='blogs_avatar'>
            <img src={AVTR9} alt='avatar' />
          </div>
          <h5 className='blogs_name'>The Role of Data Science in Enhancing Personalized User Experiences</h5>
          <p className='blogs_discription'>In today’s digital landscape, personalization has become an integral part of user experiences. Whether it’s online shopping, content recommendations, or social media feeds, users expect tailored experiences that cater to their preferences and needs. Data science plays a crucial role in enabling this level of personalization by leveraging vast amounts of data to gain valuable insights. This article explores the significance of data science in enhancing personalized user experiences and delves into its various applications and future trends.</p>
          <a  href='https://medium.com/@kalanabandaranayake/the-role-of-data-science-in-enhancing-personalized-user-experiences-f8270f7fc428' target='_blank'>
                <div className='goto_link'>
                    <div className='blogs_btn-goto'>Go to</div>
                    <div className='blogs_btn-icon'>
                        <BsArrowRightShort/>
                    </div>
                </div>    
            </a>           
        </SwiperSlide>

        <SwiperSlide className='blogs'>
          <div className='blogs_avatar'>
            <img src={AVTR10} alt='avatar' />
          </div>
          <h5 className='blogs_name'>Predictive Analytics in the Film Industry</h5>
          <h6 className='blogs_name-sub'>How AI is Changing the Way Movies Are Made</h6>
          <p className='blogs_discription'>Discover how predictive analytics and artificial intelligence (AI) are revolutionizing the film industry. Explore the impact of AI on movie production, storytelling, audience engagement, and more.</p>
          <a  href='https://medium.com/@kalanabandaranayake/predictive-analytics-in-the-film-industry-how-ai-is-changing-the-way-movies-are-made-60285d3eaec0' target='_blank'>
                <div className='goto_link'>
                    <div className='blogs_btn-goto'>Go to</div>
                    <div className='blogs_btn-icon'>
                        <BsArrowRightShort/>
                    </div>
                </div>    
            </a>           
        </SwiperSlide>

        <SwiperSlide className='blogs'>
          <div className='blogs_avatar'>
            <img src={AVTR11} alt='avatar' />
          </div>
          <h5 className='blogs_name'>Unleashing the Power of Generative Adversarial Networks (GANs) in Art and Design</h5>
          
          <p className='blogs_discription'>Generative Adversarial Networks (GANs) have revolutionized the fields of art and design, providing innovative solutions for creating realistic images, generating new art forms, and transforming the way we approach creativity. In this article, we will explore the fascinating world of GANs and their immense potential in the realms of art and design.</p>
          <a  href='https://medium.com/@kalanabandaranayake/unleashing-the-power-of-generative-adversarial-networks-gans-in-art-and-design-f3819e6eb70' target='_blank'>
                <div className='goto_link'>
                    <div className='blogs_btn-goto'>Go to</div>
                    <div className='blogs_btn-icon'>
                        <BsArrowRightShort/>
                    </div>
                </div>    
            </a>           
        </SwiperSlide>

        <SwiperSlide className='blogs'>
          <div className='blogs_avatar'>
            <img src={AVTR12} alt='avatar' />
          </div>
          <h5 className='blogs_name'>Exploring the Intersection of Art and AI</h5>
          <h6 className='blogs_name-sub'>How Machine Learning is Transforming Creative Expression</h6>
          <p className='blogs_discription'>Art and artificial intelligence (AI) may seem like unlikely bedfellows, but in recent years, the convergence of these two domains has opened up new possibilities for creative expression. As AI technology continues to advance, artists and enthusiasts alike are embracing its potential to push the boundaries of artistic innovation. This article delves into the intricate relationship between art and AI, exploring how machine learning is transforming the landscape of creative expression.</p>
          <a  href='https://medium.com/@kalanabandaranayake/exploring-the-intersection-of-art-and-ai-how-machine-learning-is-transforming-creative-expression-d3388f9a2d0b' target='_blank'>
                <div className='goto_link'>
                    <div className='blogs_btn-goto'>Go to</div>
                    <div className='blogs_btn-icon'>
                        <BsArrowRightShort/>
                    </div>
                </div>    
            </a>           
        </SwiperSlide>

        {/* <SwiperSlide className='blogs'>
          <div className='blogs_avatar'>
            <img src={AVTR13} alt='avatar' />
          </div>
          <h5 className='blogs_name'>The Future of AI</h5>
          <h6 className='blogs_name-sub'>A Look at What’s to Come</h6>
          <p className='blogs_discription'>Artificial intelligence (AI) is rapidly changing the world around us. From self-driving cars to virtual assistants, AI is already having a major impact on our lives. And as AI continues to develop, its impact is only going to grow.</p>
          <a  href='https://medium.com/@kalanabandaranayake/the-future-of-ai-a-look-at-whats-to-come-9d2c838cf950' target='_blank'>
                <div className='goto_link'>
                    <div className='blogs_btn-goto'>Go to</div>
                    <div className='blogs_btn-icon'>
                        <BsArrowRightShort/>
                    </div>
                </div>    
            </a>           
        </SwiperSlide> */}

        <SwiperSlide className='blogs'>
          <div className='blogs_avatar'>
            <img src={AVTR15} alt='avatar' />
          </div>
          <h5 className='blogs_name'>Introduction to AI in Bioinformatics</h5>
          <h6 className='blogs_name-sub'>Exploring Bioinformatics with Artificial Intelligence</h6>
          <p className='blogs_discription'>Bioinformatics is an interdisciplinary field that combines biology, computer science, and statistics to analyze and interpret biological data. The integration of artificial intelligence (AI) techniques in bioinformatics has greatly enhanced our understanding of biological systems, as well as enabled the discovery of new drugs and therapies. In this story, we will explore the various applications of AI in bioinformatics and the challenges associated with its implementation.</p>
          <a  href='https://medium.com/@kalanabandaranayake/bioinformatics-is-an-interdisciplinary-field-that-combines-biology-computer-science-and-cbf368c88850' target='_blank'>
                <div className='goto_link'>
                    <div className='blogs_btn-goto'>Go to</div>
                    <div className='blogs_btn-icon'>
                        <BsArrowRightShort/>
                    </div>
                </div>    
            </a>           
        </SwiperSlide>

        {/* <SwiperSlide className='blogs'>
          <div className='blogs_avatar'>
            <img src={AVTR16} alt='avatar' />
          </div>
          <h5 className='blogs_name'>Unlock the Power of Data in Science</h5>
          <h6 className='blogs_name-sub'>How Big Data is Revolutionizing Business Decision-Making</h6>
          <p className='blogs_discription'>Big data is making waves in the business world. It is the new tool that is revolutionizing the way businesses make decisions. Companies are now leveraging data to gain insights and make more informed decisions. But what exactly is big data, and how can companies use it to make better decisions? In this blog post, we will explore the power of data in science, how big data is revolutionizing business decision-making, and the challenges of big data projects. Let’s dive in and unlock the power of data in science!</p>
          <a  href='https://medium.com/@kalanabandaranayake/unlock-the-power-of-data-in-science-how-big-data-is-revolutionizing-business-decision-making-a441dec19cff' target='_blank'>
                <div className='goto_link'>
                    <div className='blogs_btn-goto'>Go to</div>
                    <div className='blogs_btn-icon'>
                        <BsArrowRightShort/>
                    </div>
                </div>    
            </a>           
        </SwiperSlide> */}

        {/* <SwiperSlide className='blogs'>
          <div className='blogs_avatar'>
            <img src={AVTR17} alt='avatar' />
          </div>
          <h5 className='blogs_name'>Stay Ahead of the Curve</h5>
          <h6 className='blogs_name-sub'>Exploring the Future of Coding Trends</h6>
          <p className='blogs_discription'>Coding is one of the most important skills of the 21st century. It’s a skill that is becoming increasingly sought after in the workplace and can be a great way to set yourself apart from the competition. As technology continues to evolve, so too does the coding landscape. Keeping up with the latest coding trends can help you stay ahead of the curve and give you the edge you need to succeed. In this blog, we’ll explore the future of coding trends, the benefits of coding, why it’s important for the future, and how to best learn to code.</p>
          <a  href='https://medium.com/@kalanabandaranayake/stay-ahead-of-the-curve-exploring-the-future-of-coding-trends-d874eaeb47df' target='_blank'>
                <div className='goto_link'>
                    <div className='blogs_btn-goto'>Go to</div>
                    <div className='blogs_btn-icon'>
                        <BsArrowRightShort/>
                    </div>
                </div>    
            </a>           
        </SwiperSlide> */}

        <SwiperSlide className='blogs'>
          <div className='blogs_avatar'>
            <img src={AVTR18} alt='avatar' />
          </div>
          <h5 className='blogs_name'>What is Green Technology and How is it Changing the Modern World?</h5>
          <h6 className='blogs_name-sub'>Transforming the World: Exploring the Power and Potential of Green Technology‍</h6>
          <p className='blogs_discription'>In recent years, green technology has become an increasingly important topic of discussion and research. As global temperatures continue to rise, the need for sustainable solutions has become more urgent. Green technology is a term used to describe a variety of practices and products that are designed to reduce the environmental impact of human activity. In this article, we will explore what green technology is and how it is changing the world.</p>
          <a  href='https://medium.com/@kalanabandaranayake/what-is-green-technology-and-how-is-it-changing-the-modern-world-a4949b980517' target='_blank'>
                <div className='goto_link'>
                    <div className='blogs_btn-goto'>Go to</div>
                    <div className='blogs_btn-icon'>
                        <BsArrowRightShort/>
                    </div>
                </div>    
            </a>           
        </SwiperSlide>

        {/* <SwiperSlide className='blogs'>
          <div className='blogs_avatar'>
            <img src={AVTR19} alt='avatar' />
          </div>
          <h5 className='blogs_name'>How To Work With E-Business And Internet Technology</h5>
          
          <p className='blogs_discription'>The internet is a rapidly changing technology and e-business is one of the fastest-growing sectors in the world. E-commerce has revolutionized the way we buy products. It is estimated that by 2020 the e-commerce industry will be worth $3 trillion. This is why it is so important to create an e-commerce website in order to capitalize on this market.</p>
          <a  href='https://medium.com/@kalanabandaranayake/how-to-work-with-e-business-and-internet-technology-c719af9b0383' target='_blank'>
                <div className='goto_link'>
                    <div className='blogs_btn-goto'>Go to</div>
                    <div className='blogs_btn-icon'>
                        <BsArrowRightShort/>
                    </div>
                </div>    
            </a>           
        </SwiperSlide> */}

        {/* <SwiperSlide className='blogs'>
          <div className='blogs_avatar'>
            <img src={AVTR20} alt='avatar' />
          </div>
          <h5 className='blogs_name'>The Impact of Technology on the Future of Business</h5>
          
          <p className='blogs_discription'>The world is constantly changing and so are businesses. Technology is increasing by the day and it’s expected to be the driving force of how business is done in the future. But what will be the impact on the future of business? Will technology be a force for good or bad? Here, we will explore the future of technology, how it will impact the future of business, and how it will change the future of society.</p>
          <a  href='https://medium.com/@kalanabandaranayake/the-impact-of-technology-on-the-future-of-business-5ef18bce383d' target='_blank'>
                <div className='goto_link'>
                    <div className='blogs_btn-goto'>Go to</div>
                    <div className='blogs_btn-icon'>
                        <BsArrowRightShort/>
                    </div>
                </div>    
            </a>           
        </SwiperSlide> */}

        <SwiperSlide className='blogs'>
          <div className='blogs_avatar'>
            <img src={AVTR21} alt='avatar' />
          </div>
          <h5 className='blogs_name'>Artificial Intelligence: Is it Too Good to be True?</h5>
          
          <p className='blogs_discription'>Every day, we hear about the latest advancements in artificial intelligence. From self-driving cars and automated customer service agents to virtual assistants and chatbots, AI is all around us. In fact, a recent survey found that 94% of executives believe AI will have a positive impact on their company in the next three years. But while so many companies are rushing to implement AI, others remain sceptical. With so much hype surrounding this technology, how can you tell if it’s too good to be true? Read on for an explanation of common misconceptions about AI and helpful advice on how best to leverage its potential in your organization.</p>
          <a  href='https://medium.com/@kalanabandaranayake/artificial-intelligence-is-it-too-good-to-be-true-e6d809b67622' target='_blank'>
                <div className='goto_link'>
                    <div className='blogs_btn-goto'>Go to</div>
                    <div className='blogs_btn-icon'>
                        <BsArrowRightShort/>
                    </div>
                </div>    
            </a>           
        </SwiperSlide>

        {/* <SwiperSlide className='blogs'>
          <div className='blogs_avatar'>
            <img src={AVTR22} alt='avatar' />
          </div>
          <h5 className='blogs_name'>Machine Learning In Business</h5>
          <p className='blogs_discription'>Machine learning is a subfield of computer science that focuses on algorithms that can learn from data. Given a dataset, in machine learning you attempt to develop a program or algorithm that can make predictions and identify patterns from the given data set in order to make informed decisions moving forward. Other names for machine learning include artificial intelligence, predictive analytics, and data mining. It has applications in almost every field, as it helps businesses make sense of the massive amounts of data they accumulate daily through their website or other digital platforms. As we continue to process more data than ever before, machine learning algorithms are improving our ability to discover insights from large datasets. These algorithms will help you extract useful information from your raw data and enable you to act on those insights with confidence.</p>
          <a  href='https://medium.com/@kalanabandaranayake/machine-learning-5eb32389d5c5' target='_blank'>
                <div className='goto_link'>
                    <div className='blogs_btn-goto'>Go to</div>
                    <div className='blogs_btn-icon'>
                        <BsArrowRightShort/>
                    </div>
                </div>    
            </a>           
        </SwiperSlide> */}


        
      </Swiper>
    </section>
  )
}

export default blogs