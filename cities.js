// cities.js
const cities = ['Montreal', 'Tokyo', 'Vancouver', 'Los Angeles', 'Buenos Aires', 'Kabul', 'Ankara', 'Budapest', 'Barcelona', 'Damascus', 'Lisbon', 'Vienna', 'London', 'Melbourne', 'Shanghai', 'New York', 'Mumbai', 'Toronto', 'Jakarta', 'Hyderabad', 'Paris', 'Cairo', 'Sao Paulo', 'Sydney', 'Taipei', 'Washington,  D.C.', 'Istanbul', 'Riyadh', 'Cape Town', 'Moscow', 'Pune', 'Nagpur', 'Tel Aviv', 'Helsinki', 'Jaipur', 'Kanpur', 'Patna', 'Chennai', 'Ahmedabad', 'Surat', 'Copenhagen', 'Abidjan', 'Brasília', 'Curitiba', 'Fortaleza', 'Goiânia', 'Brussels', 'Dhaka', 'Algiers', 'Chattogram', 'Perth', 'Denver', 'Houston', 'Atlanta', 'Chicago', 'Tashkent', 'Madrid', 'Stockholm', 'Bangkok', 'Lima', 'Johannesburg', 'Casablanca', 'Seoul', 'Monterrey', 'Berlin', 'Chengdu', 'New Delhi', 'Bengaluru', 'Baghdad', 'Addis Ababa', 'Tehran', 'Mexico City', 'Lagos', 'Rome', 'Beijing', 'Nairobi', 'Kolkata', 'Bogota', 'Santiago', 'Glendale', 'Mesa', 'National City', 'Riverside', 'Pasadena', 'Arlington', 'Stamford', 'Springfield', 'Coral Springs', 'Marietta', 'Joliet', 'Evanston', 'Paterson', 'Allentown', 'Ibb', 'Reading', 'Sheffield', 'Braga', 'Sialkote', 'Sheikhu Pura', 'Gujrat', 'Sahiwal', 'Chiniot', 'Rahim Yar Khan', 'Mansehra', 'Abbottabad', 'Mardan', 'Nezahualcoyotl', 'Como', 'Huizhou', 'Chaozhou', 'Dortmund', 'Duisburg', 'Essen', 'Dali', 'Jingzhou', 'Anlu', 'Deyang', 'Hengshui', 'Luohe', 'Zhucheng', 'Xinyi', 'Yangzhou', 'Maebashi', 'Kawasaki', 'Kawagoe', 'HachiÅ_x008d_ji', 'Gurgaon', 'Sonipat', 'Rohtak', 'Hisar', 'Bhiwani', 'Ambala', 'Kalyan', 'Bhusawal', 'Jorhat', 'Hoshiarpur', 'Hathras', 'Sitapur', 'Pilibhit', 'Budaun', 'Firozabad', 'Mathura', 'Bulandshahr', 'Hapur', 'Muzaffarnagar', 'Nova IguaÃ§u', 'Santo AndrÃ©', 'Tangail', 'Sylhet', 'LiÃ¨ge', 'Pasadena', 'Oceanside', 'Irvine', 'St. Charles', 'New Haven', 'Lowell', 'Coral Gables', 'Fort Lauderdale', 'Greenville', 'Waukegan', 'Aurora', 'Gary', 'Covington', 'Akron', 'Alexandria', 'Newark', 'Grand Rapids', 'Pontiac', 'Tartus', 'Qoqon', 'Pathum Thani', 'Nonthaburi', 'Samut Prakan', 'SÆ¡n TÃ¢y', 'Báº¯c Giang', 'Quáº£ng NgÃ£i', 'Long Xuyen', 'ChÃ¢u Ä_x0090_á»_x0091_c', 'Báº¡c LiÃªu', 'SÃ³c TrÄ_x0083_ng', 'Badulla', 'Moratuwa', 'Arua', 'Tororo', 'Masaka', 'Moshi', 'Gitarama', 'Butare', 'Gisenyi', 'Cyangugu', 'Byumba', 'Ruhengeri', 'Bungoma', 'Kakamega', 'Kasur', 'Kundian', 'Okara', 'Jhang', 'Sargodha', 'Dera Ghazi Khan', 'Sadiqabad', 'Nawabshah', 'Bannu', 'Birganj', 'Biratnagar', 'Butterworth', 'Kisii', 'Tarlac', 'Cabanatuan', 'Dagupan', 'Quezon City', 'Pasay City', 'Toluca', 'Zumpango', 'Orlu', 'Ikare', 'Ado Ekiti', 'Awka', 'Onitsha', 'Nsukka', 'Katsina', 'Binjai', 'Bukittinggi', 'Praya', 'Bergamo', 'Hechi', 'Changping', 'Zhangzhou', 'Putian', 'Jieshou', 'Fuyang', 'Yangjiang', 'Jiangmen', 'Maoming', 'Indramayu', 'Sukabumi', 'Cilacap', 'Pati', 'Pakalongan', 'Tegal', 'Magelang', 'Serang', 'Bekasi', 'Sumenep', 'Tuban', 'Probolinggo', 'Pasuruan', 'Mojokerto', 'Madiun', 'Kediri', 'Blitar', 'Tanta', 'Girga', 'Sohag', 'DÃ¼sseldorf', 'SaarbrÃ¼cken', 'Weinan', 'Jincheng', 'Jiexiu', 'Guangshui', 'Xiaogan', 'Jinshi', 'Xiangtan', 'Zigong', 'Langzhong', 'Cangzhou', 'Baoding', 'Dingzhou', 'Nangong', 'Linqing', 'Xiangtai', 'Puyang', 'Hebi', 'Xuchang', 'Zhoukou', 'Dengzhou', 'Yishui', 'Shanxian', 'Pingyi', 'Pingdu', 'Laiwu', 'Buizhou', 'Liaocheng', 'Rizhao', 'Dezhou', 'Fengcheng', 'Shangrao', 'Taizhou', 'Jiaojing', 'Quzhou', 'KitakyÅ«shÅ«', 'Gifu', 'Hamamatsu', 'Sirsa', 'Panipat', 'Karnal', 'Tirupati', 'Rajahmundry', 'Machilipatnam', 'Kollam', 'Alappuzha', 'Puri', 'Sangli', 'Tezpur', 'Silchar', 'Versailles', 'Debre Birhan', 'Yirga Alem', 'Hosaina', 'Dila', 'Shashemene', 'Karaj', 'Abohar', 'Patiala', 'Sikar', 'Bharatpur', 'Alwar', 'Fatehpur', 'Faizabad', 'Bahraich', 'Mirzapur', 'Jhansi', 'Shahjahanpur', 'Rampur', 'Bareilly', 'Etawah', 'Dehra Dun', 'Haora', 'Alipur Duar', 'Haldia', 'Bhatpara', 'Medinipur', 'Siliguri', 'Purnia', 'Muzaffarpur', 'Aurangabad', 'Vellore', 'Tiruvannamalai', 'Cuddalore', 'Karur', 'Kanchipuram', 'Nagercoil', 'Thanjavur', 'Kumbakonam', 'Tiruppur', 'Gandhinagar', 'Agartala', 'Bafoussam', 'Charikar', 'Mymensingh', 'Jamalpur', 'Narayanganj', 'Ouidah', 'Abomey', 'Jashore', 'Barishal', 'Comilla', 'Muyinga', 'Pabna', 'Nawabganj', 'Gitega', 'Tacoma', 'Long Beach', 'Hartford', 'Providence', 'Birmingham', 'St. Petersburg', 'Greensboro', 'Dayton', 'Trenton', 'Fargona', 'Namangan', 'ThÃ¡i NguyÃªn', 'Liverpool', 'Galle', 'Suwon', 'Porto', 'Rotterdam', 'Faisalabad', 'Rawalpindi', 'Bahawalpur', 'Sukkur', 'Kelang', 'Turin', 'Anshun', 'Zunyi', 'Wanzhou', 'Huaibei', 'Wuhu', 'Bengbu', 'Foshan', 'Giza', 'Stuttgart', 'Hanzhong', 'Linfen', 'Yuci', 'Jianmen', 'Yichang', 'Xiantao', 'Macheng', 'Huangshi', 'Yiyang', 'Changde', 'Leshan', 'Yibin', 'Qinhuangdao', 'Tangshan', 'Anyang', 'Jiaozuo', 'Kaifeng', 'Shangqiu', 'Pingdingshan', 'Xinyang', 'Xinxiang', 'Luoyang', 'Liaoyang', 'Yingkow', 'Jining', 'Weifang', 'Taian', 'Heze', 'Xinyu', 'Changzhou', 'Zhenjiang', 'Nantong', 'Jiaxing', 'Huzhou', 'Shaoxing', 'Jinhua', 'KÅ_x008d_be', 'Yokohama', 'Kakinada', 'Warangal', 'Brahmapur', 'Imphal', 'Nice', 'Toulouse', 'Lille', 'Gorakhpur', 'Barddhaman', 'Krishnanagar', 'Gaya', 'West Palm Beach', 'Sarasota', 'Charleston', 'Louisville', 'Charlotte', 'Toledo', 'Columbus', 'Hue', 'BiÃªn HÃ²a', 'Can Tho', 'Hamilton', 'Windsor', 'Antwerpen', 'Rangpur', 'Thohoyandou', 'Yogyakarta', 'Cirebon', 'Tasikmalaya', 'Bogor', 'Kotabumi', 'Jember', 'Cologne', 'Xiangyang', 'Zomba', 'Nellore', 'Guntur', 'Jima', 'Nazret', 'Dindigul', 'Tainan', 'San Bernardino', 'Rochester', 'Manchester', 'Gujranwala', 'Incheon', 'Nanchong', 'Neijiang', 'Nanyang', 'Yantai', 'Zaozhuang', 'Suzhou', 'Xuzhou', 'Wuxi', 'Jilin', 'Chandigarh', 'Jammu', 'Nasik', 'Dispur', 'Jullundur', 'Allahabad', 'Moradabad', 'Ghaziabad', 'Agra', 'Aligarh', 'Meerut', 'Dhanbad', 'Vadodara', 'St.  Paul', 'Tucson', 'Albuquerque', 'Columbia', 'Kansas City', 'Tulsa', 'Baton Rouge', 'Ft.  Worth', 'Austin', 'Orlando', 'Jacksonville', 'Indianapolis', 'Richmond', 'Baltimore', 'Taizz', 'Andijan', 'Haiphong', 'Birmingham', 'Kigali', 'Larkana', 'Kandy', 'Sri Jayawardenepura Kotte', 'Busan', 'Port Harcourt', 'Warri', 'KrakÃ³w', 'Meru', 'Yulin', 'Quanzhou', 'Hefei', 'Surakarta', 'Malang', 'Putrajaya', 'Ankang', 'Hengyang', 'Mianyang', 'Shijiazhuang', 'Handan', 'Anshan', 'Dalian', 'Qingdao', 'Linyi', 'Huaiyin', 'Wenzhou', 'Ningbo', 'Fukuoka', 'Nagoya', 'Goma', 'Blantyre', 'Srinagar', 'Vijayawada', 'Thiruvananthapuram', 'Kochi', 'Cuttack', 'Kolhapur', 'Guwahati', 'Bordeaux', 'Ludhiana', 'Jodhpur', 'Lucknow', 'Saharanpur', 'Ranchi', 'Bhagalpur', 'Raipur', 'Indore', 'Puducherry', 'Salem', 'Tiruchirappalli', 'Belo Horizonte', 'Campinas', 'Khulna', 'Rajshahi', 'Bujumbura', 'Taichung', 'Kozhikode', 'Bhubaneswar', 'Jamshedpur', 'San Jose', 'Sacramento', 'Las Vegas', 'Portland', 'Salt Lake City', 'Omaha', 'Oklahoma City', 'San Antonio', 'Raleigh', 'Cleveland', 'Cincinnati', 'Nashville', 'Norfolk', 'Milwaukee', 'Buffalo', 'Pittsburgh', 'Tunis', 'Glasgow', 'Kampala', 'Dushanbe', 'Islamabad', 'Multan', 'Hyderabad', 'Peshawar', 'Pretoria', 'Rabat', 'Colombo', 'Iloilo', 'Enugu', 'Amman', 'Huainan', 'Shantou', 'Antananarivo', 'Semarang', 'Makassar', 'Lyon', 'Lilongwe', 'Guatemala City', 'Vishakhapatnam', 'Beirut', 'Amritsar', 'Varanasi', 'Madurai', 'Coimbatore', 'Calgary', 'Ottawa', 'Phnom Penh', 'Adelaide', 'Brisbane', 'San Juan', 'Shenzhen', 'Zibo', 'Minneapolis', 'Seattle', 'Phoenix', 'San Diego', 'St. Louis', 'Dallas', 'Boston', 'Tampa', 'Philadelphia', 'Detroit', 'Hanoi', 'Ho Chi Minh City', 'Jeddah', 'Lahore', 'Karachi', 'Durban', 'St.  Petersburg', 'Guadalajara', 'Puebla', 'Kano', 'Warsaw', 'Pyongyang', 'Medan', 'Naples', 'Milan', 'Kuala Lumpur', 'Chongqing', 'Guangzhou', 'Bandung', 'Surabaya', 'Frankfurt', 'Hamburg', 'Munich', 'Xian', 'Taiyuan', 'Wuhan', 'Changsha', 'Kunming', 'Zhengzhou', 'Shenyeng', 'Jinan', 'Tianjin', 'Nanchang', 'Nanjing', 'Hangzhou', 'Changchun', 'Harbin', 'Sapporo', 'Santo Domingo', 'Accra'];

export default cities;