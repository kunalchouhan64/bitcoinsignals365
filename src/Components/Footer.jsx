import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Footer = () => {


    const onSubmit = (e) => {

        e.preventDefault()
        const form = document.forms['Contactform']
        const notify = () => toast("Thank You...You Response Has Been Submitted!!");
        fetch('https://script.google.com/macros/s/AKfycbwdehCKGyUxkeXRQDbYCNkuxZHFZXEXsajSss8wqkTdozL1dwYg6l8eFqrEZIZFlHSQhg/exec', { method: 'POST', body: new FormData(form) })

            .then(() => notify())

        document.getElementById('Contactform').reset()
        // alert('Your Response Has Been Submitted Successfully..')



    }

    return (
        <>
        <ToastContainer />
            <div className='h-auto pt-10 bg-[#0B0B49] mb:h-auto mb:w-auto mb:pt-5 lg:pt-5 overflow-hidden'>

                <div className="wrapper h-auto flex justify-evenly items-center mb:flex-col mb:items-center mb:h-auto mb:px-6 mb:space-y-14 lg:flex-row lg:px-0 lg:space-y-0">

                    <div className="logo space-y-6 lg:space-y-6 mb:space-y-3 mb:pl-8">
                        <img className='h-28' src="\Images\Bitcoinsignals_logo.png" alt="" />
                        <h3 className='font-Poppins text-[#22BBFD] text-xl font-semibold'>Contact Us</h3>
                        <p className='flex space-x-3 items-center'> <span><ion-icon style={{ color: "white", fontSize: '1.6rem' }} name="mail-outline"></ion-icon></span> <span className='font-Poppins text-white'> <a href="mailto:info@bitcoinsignals365.com">info@bitcoinsignals365.com</a> </span> </p>
                        <p className='flex space-x-3 items-center'> <span><ion-icon style={{ color: "white", fontSize: '1.6rem' }} name="call-outline"></ion-icon></span> <span className='font-Poppins text-white'>+44</span> </p>
                        <p className='flex space-x-3 items-center'> <span><ion-icon style={{ color: "white", fontSize: '1.6rem' }} name="location-outline"></ion-icon></span> <span className='font-Poppins text-white w-80 mb:w-auto lg:w-80'>Bitcoinsignals365, Capital Office, 124 City Road, London, EC1V 2NX</span> </p>

                    </div>
                    

                    <form action='https://script.google.com/macros/s/AKfycbwdehCKGyUxkeXRQDbYCNkuxZHFZXEXsajSss8wqkTdozL1dwYg6l8eFqrEZIZFlHSQhg/exec' onSubmit={onSubmit}
                        method="POST" name='Contactform' id='Contactform' className='space-y-5 mb:px-5 formName'>
                        <h2 className='font-Poppins text-xl text-[#22BBFD] mb:text-center lg:text-left'>Enquiry Form</h2>
                        <div className='bg-white outline-none  px-5 flex items-center justify-center space-x-1 rounded-md mb:w-'>
                            <span className='pt-2'><ion-icon style={{ color: "black", fontSize: '1.6rem' }} name="person"></ion-icon></span>
                            <input type="text" required name="Name" className='outline-none border-none font-Poppins font-[300] mb:w-56 text-lg' placeholder='Your Name' autoComplete='off' />
                        </div>

                        <div className='bg-white outline-none  px-4 flex items-center justify-center space-x-3 rounded-md'>
                            <span className='pt-2'><ion-icon style={{ color: "black", fontSize: '1.6rem' }} name="location"></ion-icon></span>
                            {/* <input type="text" name="country" value={Data.country} onChange={handleInput} className='outline-none border-none font-Poppins font-[300] mb:w-56' placeholder='Your Country' /> */}
                            <select type="text" required name="Country" className='outline-none border-none font-Poppins font-[300] text-black w-64 bg-[#f8f8f9] mb:w-52' placeholder='Your Country' id="country">
                                {/* <option>Country</option> */}
                                <option>Your Country</option>
                                <option value="+213- Algeria">Algeria (+213)</option>
                                <option value="+376- Andorra">Andorra (+376)</option>
                                <option value="+244- Angola">Angola (+244)</option>
                                <option value="+1264- Anguilla">Anguilla (+1264)</option>
                                <option value="+1268- Antigua">Antigua &amp; Barbuda (+1268)</option>
                                <option value="+54- Argentina">Argentina (+54)</option>
                                <option value="+374- Armenia">Armenia (+374)</option>
                                <option value="+297- Aruba">Aruba (+297)</option>
                                <option value="+61- Australia">Australia (+61)</option>
                                <option value="+43- Austria">Austria (+43)</option>
                                <option value="+994- Azerbaijan">Azerbaijan (+994)</option>
                                <option value="+124- 2Bahamas">Bahamas (+1242)</option>
                                <option value="+973- Bahrain">Bahrain (+973)</option>
                                <option value="+880- Bangladesh">Bangladesh (+880)</option>
                                <option value="+1246- Barbados">Barbados (+1246)</option>
                                <option value="+375- Belarus">Belarus (+375)</option>
                                <option value="+32- Belgium">Belgium (+32)</option>
                                <option value="+501- Belize">Belize (+501)</option>
                                <option value="+229- Benin">Benin (+229)</option>
                                <option value="+1441- Bermuda">Bermuda (+1441)</option>
                                <option value="+975- Bhutan">Bhutan (+975)</option>
                                <option value="+591- Bolivia">Bolivia (+591)</option>
                                <option value="+387- Bosnia">Bosnia Herzegovina (+387)</option>
                                <option value="+267- Botswana">Botswana (+267)</option>
                                <option value="+55- Brazil">Brazil (+55)</option>
                                <option value="+673- Brunei">Brunei (+673)</option>
                                <option value="+359- Bulgaria">Bulgaria (+359)</option>
                                <option value="+226- Burkina">Burkina Faso (+226)</option>
                                <option value="+257- Burundi">Burundi (+257)</option>
                                <option value="+855- Cambodia">Cambodia (+855)</option>
                                <option value="+237- Cameroon">Cameroon (+237)</option>
                                <option value="+1- Canada">Canada (+1)</option>
                                <option value="+238- Cape Verde Islands ">Cape Verde Islands (+238)</option>
                                <option value="+1345- Cayman Islands">Cayman Islands (+1345)</option>
                                <option value="+236- Central African Republic">Central African Republic (+236)</option>
                                <option value="+56- Chile">Chile (+56)</option>
                                <option value="+86- China">China (+86)</option>
                                <option value="+57- Colombia">Colombia (+57)</option>
                                <option value="+269- Comoros">Comoros (+269)</option>
                                <option value="+242- Congo">Congo (+242)</option>
                                <option value="+682- Cook Islands">Cook Islands (+682)</option>
                                <option value="+506- Costa Rica">Costa Rica (+506)</option>
                                <option value="+385- Croatia">Croatia (+385)</option>
                                <option value="+53- Cuba">Cuba (+53)</option>
                                <option value="+90392- Cyprus North">Cyprus North (+90392)</option>
                                <option value="+357- Cyprus South">Cyprus South (+357)</option>
                                <option value="+42- Czech Republic">Czech Republic (+42)</option>
                                <option value="+45- Denmark">Denmark (+45)</option>
                                <option value="+253- Djibouti">Djibouti (+253)</option>
                                <option value="+1809- Dominica">Dominica (+1809)</option>
                                <option value="+1809- Dominican Republic">Dominican Republic (+1809)</option>
                                <option value="+593- Ecuador">Ecuador (+593)</option>
                                <option value="+20- Egypt">Egypt (+20)</option>
                                <option value="+503- El Salvador">El Salvador (+503)</option>
                                <option value="+240- Equatorial Guinea">Equatorial Guinea (+240)</option>
                                <option value="+291- Eritrea">Eritrea (+291)</option>
                                <option value="+372- Estonia">Estonia (+372)</option>
                                <option value="+251- Ethiopia">Ethiopia (+251)</option>
                                <option value="+500- Falkland Islands">Falkland Islands (+500)</option>
                                <option value="+298- Faroe Islands">Faroe Islands (+298)</option>
                                <option value="+679- Fiji">Fiji (+679)</option>
                                <option value="+358- Finland">Finland (+358)</option>
                                <option value="+33- France">France (+33)</option>
                                <option value="+594- French Guiana">French Guiana (+594)</option>
                                <option value="+689- French Polynesia">French Polynesia (+689)</option>
                                <option value="+241- Gabon">Gabon (+241)</option>
                                <option value="+220- Gambia">Gambia (+220)</option>
                                <option value="+7880- Georgia">Georgia (+7880)</option>
                                <option value="+49- Germany">Germany (+49)</option>
                                <option value="+23- 3Ghana">Ghana (+233)</option>
                                <option value="+350- Gibraltar">Gibraltar (+350)</option>
                                <option value="+30- Greece">Greece (+30)</option>
                                <option value="+299- Greenland">Greenland (+299)</option>
                                <option value="+1473- Grenada">Grenada (+1473)</option>
                                <option value="+590- Guadeloupe">Guadeloupe (+590)</option>
                                <option value="+671- Guam">Guam (+671)</option>
                                <option value="+502- Guatemala">Guatemala (+502)</option>
                                <option value="+224- Guinea">Guinea (+224)</option>
                                <option value="+245- Guinea">Guinea - Bissau (+245)</option>
                                <option value="+592- Guyana">Guyana (+592)</option>
                                <option value="+509- Haiti">Haiti (+509)</option>
                                <option value="+504- Honduras">Honduras (+504)</option>
                                <option value="+852- Hong Kong">Hong Kong (+852)</option>
                                <option value="+36- Hungary">Hungary (+36)</option>
                                <option value="+354- Iceland">Iceland (+354)</option>
                                <option value="+91- India">India (+91)</option>
                                <option value="+62- Indonesia">Indonesia (+62)</option>
                                <option value="+98- Iran">Iran (+98)</option>
                                <option value="+964- Iraq">Iraq (+964)</option>
                                <option value="+353- Ireland">Ireland (+353)</option>
                                <option value="+972- Israel">Israel (+972)</option>
                                <option value="+39- Italy">Italy (+39)</option>
                                <option value="+1876- Jamaica">Jamaica (+1876)</option>
                                <option value="+81- Japan">Japan (+81)</option>
                                <option value="+962- Jordan">Jordan (+962)</option>
                                <option value="+7- Kazakhstan">Kazakhstan (+7)</option>
                                <option value="+254- Kenya">Kenya (+254)</option>
                                <option value="+686- Kiribati">Kiribati (+686)</option>
                                <option value="+850- Korea North">Korea North (+850)</option>
                                <option value="+82- Korea South">Korea South (+82)</option>
                                <option value="+965- Kuwait">Kuwait (+965)</option>
                                <option value="+996- Kyrgyzstan">Kyrgyzstan (+996)</option>
                                <option value="+856- Laos">Laos (+856)</option>
                                <option value="+371- Latvia">Latvia (+371)</option>
                                <option value="+961- Lebanon">Lebanon (+961)</option>
                                <option value="+266- Lesotho">Lesotho (+266)</option>
                                <option value="+231- Liberia">Liberia (+231)</option>
                                <option value="+218- Libya">Libya (+218)</option>
                                <option value="+417- Liechtenstein">Liechtenstein (+417)</option>
                                <option value="+370- Lithuania">Lithuania (+370)</option>
                                <option value="+352- Luxembourg">Luxembourg (+352)</option>
                                <option value="+853- Macao">Macao (+853)</option>
                                <option value="+389- Macedonia">Macedonia (+389)</option>
                                <option value="+261- Madagascar">Madagascar (+261)</option>
                                <option value="+265- Malawi">Malawi (+265)</option>
                                <option value="+60- Malaysia">Malaysia (+60)</option>
                                <option value="+960- Maldives">Maldives (+960)</option>
                                <option value="+223- Mali">Mali (+223)</option>
                                <option value="+356- Malta">Malta (+356)</option>
                                <option value="+692- Marshall Islands">Marshall Islands (+692)</option>
                                <option value="+596- Martinique">Martinique (+596)</option>
                                <option value="+222- Mauritania">Mauritania (+222)</option>
                                <option value="+269- Mayotte">Mayotte (+269)</option>
                                <option value="+52- Mexico">Mexico (+52)</option>
                                <option value="+691- Micronesia">Micronesia (+691)</option>
                                <option value="+373- Moldova">Moldova (+373)</option>
                                <option value="+377- Monaco">Monaco (+377)</option>
                                <option value="+976- Mongolia">Mongolia (+976)</option>
                                <option value="+1664- Montserrat">Montserrat (+1664)</option>
                                <option value="+212- Morocco">Morocco (+212)</option>
                                <option value="+258- Mozambique">Mozambique (+258)</option>
                                <option value="+95- Myanmar">Myanmar (+95)</option>
                                <option value="+264- Namibia">Namibia (+264)</option>
                                <option value="+674- Nauru">Nauru (+674)</option>
                                <option value="+977- Nepal">Nepal (+977)</option>
                                <option value="+31- Netherlands">Netherlands (+31)</option>
                                <option value="+687- New Caledonia">New Caledonia (+687)</option>
                                <option value="+64- New Zealand">New Zealand (+64)</option>
                                <option value="+505- Nicaragua">Nicaragua (+505)</option>
                                <option value="+227- Niger">Niger (+227)</option>
                                <option value="+234- Nigeria">Nigeria (+234)</option>
                                <option value="+683- Niue">Niue (+683)</option>
                                <option value="+672- Norfolk Islands">Norfolk Islands (+672)</option>
                                <option value="+670- Northern Marianas">Northern Marianas (+670)</option>
                                <option value="+47- Norway">Norway (+47)</option>
                                <option value="+968- Oman">Oman (+968)</option>
                                <option value="+92- Pakistan">Pakistan (+92)</option>
                                <option value="+680- Palau">Palau (+680)</option>
                                <option value="+507- Panama">Panama (+507)</option>
                                <option value="+675- Papua New Guinea">Papua New Guinea (+675)</option>
                                <option value="+595- Paraguay">Paraguay (+595)</option>
                                <option value="+51- Peru">Peru (+51)</option>
                                <option value="+63- Philippines">Philippines (+63)</option>
                                <option value="+48- Poland">Poland (+48)</option>
                                <option value="+351- Portugal">Portugal (+351)</option>
                                <option value="+1787- Puerto Rico ">Puerto Rico (+1787)</option>
                                <option value="+974- Qatar">Qatar (+974)</option>
                                <option value="+262- Reunion">Reunion (+262)</option>
                                <option value="+40- Romania">Romania (+40)</option>
                                <option value="+7- Russia">Russia (+7)</option>
                                <option value="+250- Rwanda">Rwanda (+250)</option>
                                <option value="+378- San Marino">San Marino (+378)</option>
                                <option value="+239- Sao Tome">Sao Tome &amp; Principe (+239)</option>
                                <option value="+966- Saudi Arabia">Saudi Arabia (+966)</option>
                                <option value="+221- Senegal">Senegal (+221)</option>
                                <option value="+381- Serbia">Serbia (+381)</option>
                                <option value="+248- Seychelles">Seychelles (+248)</option>
                                <option value="+232- Sierra Leone">Sierra Leone (+232)</option>
                                <option value="+65- Singapore">Singapore (+65)</option>
                                <option value="+421- Slovak Republic">Slovak Republic (+421)</option>
                                <option value="+386- Slovenia">Slovenia (+386)</option>
                                <option value="+677- Solomon Islands">Solomon Islands (+677)</option>
                                <option value="+252- Somalia">Somalia (+252)</option>
                                <option value="+27- South Africa">South Africa (+27)</option>
                                <option value="+34- Spain">Spain (+34)</option>
                                <option value="+94- Sri Lanka">Sri Lanka (+94)</option>
                                <option value="+290- St. Helena">St. Helena (+290)</option>
                                <option value="+1869- St. Kitts">St. Kitts (+1869)</option>
                                <option value="+1758- St. Lucia">St. Lucia (+1758)</option>
                                <option value="+249- Sudan">Sudan (+249)</option>
                                <option value="+597- Suriname">Suriname (+597)</option>
                                <option value="+268- Swaziland">Swaziland (+268)</option>
                                <option value="+46- Sweden">Sweden (+46)</option>
                                <option value="+41- Switzerland">Switzerland (+41)</option>
                                <option value="+963- Syria">Syria (+963)</option>
                                <option value="+886- Taiwan">Taiwan (+886)</option>
                                <option value="+7- Tajikstan">Tajikstan (+7)</option>
                                <option value="+66- Thailand">Thailand (+66)</option>
                                <option value="+228- Togo">Togo (+228)</option>
                                <option value="+676- Tonga">Tonga (+676)</option>
                                <option value="+1868- Trinidad">Trinidad &amp; Tobago (+1868)</option>
                                <option value="+216- Tunisia">Tunisia (+216)</option>
                                <option value="+90- Turkey">Turkey (+90)</option>
                                <option value="+7- Turkmenistan">Turkmenistan (+7)</option>
                                <option value="+993- Turkmenistan">Turkmenistan (+993)</option>
                                <option value="+1649- Turks">Turks &amp; Caicos Islands (+1649)</option>
                                <option value="+688- Tuvalu">Tuvalu (+688)</option>
                                <option value="+256- Uganda">Uganda (+256)</option>
                                <option value="+44- UK">UK (+44)</option>
                                <option value="+380- Ukraine">Ukraine (+380)</option>
                                <option value="+971- United Arab Emirates">United Arab Emirates (+971)</option>
                                <option value="+598- Uruguay">Uruguay (+598)</option>
                                <option value="+1- USA">USA (+1)</option>
                                <option value="+7- Uzbekistan">Uzbekistan (+7)</option>
                                <option value="+678- Vanuatu">Vanuatu (+678)</option>
                                <option value="+379- Vatican City">Vatican City (+379)</option>
                                <option value="+58- Venezuela">Venezuela (+58)</option>
                                <option value="+84- Vietnam">Vietnam (+84)</option>
                                <option value="+84- Virgin Islands">Virgin Islands - British (+1284)</option>
                                <option value="+84- Virgin Islands">Virgin Islands - US (+1340)</option>
                                <option value="+681- Wallis">Wallis &amp; Futuna (+681)</option>
                                <option value="+969- Yemen">Yemen (North)(+969)</option>
                                <option value="+967- Yemen">Yemen (South)(+967)</option>
                                <option value="+260- Zambia">Zambia (+260)</option>
                                <option value="+263- Zimbabwe">Zimbabwe (+263)</option>
                            </select>
                        </div>
                        <div className='bg-white outline-none  px-4 flex items-center justify-center space-x-1 rounded-md'>
                            <span className='pt-2'><ion-icon style={{ color: "black", fontSize: '1.6rem' }} name="call"></ion-icon></span>
                            {/* <input   /> */}

                            <input type="tel" required name="Number" className='outline-none border-none font-Poppins font-[300] mb:w-56 text-[0.94rem] text-lg ' autoComplete='off' placeholder='Your Number' />


                        </div>

                        <div className='bg-white outline-0  px-5 flex items-center justify-center space-x-1 rounded-md'>
                            <span className='pt-2'><ion-icon style={{ color: "black", fontSize: '1.6rem' }} name="chatbubble-ellipses"></ion-icon></span>
                            <input type="text" required name="Message" className='outline-0 border-none font-Poppins font-[300] mb:w-56 text-lg' autoComplete='off' placeholder='Your Message' />
                        </div>
                        <div className='pt-3'>

                            <button type='submit' onSubmit={onSubmit} className=' font-Poppins text-lg py-2 px-8 text-white rounded-2xl bg-gradient-to-r from-[#22BBFD] via-[#905EF8] to-[#D621F4] btn_hover'>Submit</button>

                        </div>

                    </form>


                    <div className='h-auto w-auto pb-24 px-5 flex flex-col justify-start items-start space-y-5 mb:pb-3 mb:h-auto lg:pb-24'>
                        <h2 className='text-[#22BBFD] text-xl font-Poppins font-[400]'>Our Company</h2>
                        <div className='space-y-2 text-white font-Poppins mb:text-center lg:text-left flex flex-col'>
                            <AnchorLink href='#services'>Our Services</AnchorLink>
                            <AnchorLink href='#pricing'>Pricing Table</AnchorLink>
                            <AnchorLink href='#howworks'>How Does it Works</AnchorLink>
                            <AnchorLink href='#reviews'>Reviews</AnchorLink>
                            <AnchorLink href='#aboutus'>About Us</AnchorLink>
                            <AnchorLink href='#blogs'>Blogs</AnchorLink>
                        </div>
                    </div>
                    <div className='flex flex-col space-y-5'>
                        <ion-icon style={{ color: "white", fontSize: '1.9rem' }} name="logo-facebook"></ion-icon>
                        <ion-icon style={{ color: "white", fontSize: '1.9rem' }} name="logo-instagram"></ion-icon>
                        <ion-icon style={{ color: "white", fontSize: '1.9rem' }} name="logo-twitter"></ion-icon>

                    </div>

                </div>


                <div className='flex justify-center items-center pt-10 pb-2'>
                    <p className='font-Poppins text-white'>Privacy Policy | Terms & Conditiona</p>
                </div>
            </div>


        </>
    )
}

export default Footer