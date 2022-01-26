import { Content, Footer } from "antd/lib/layout/layout";
import React, { useState } from "react";
import { CopyRight, Details, MainBody, Outline, SideBar, TopHeader } from "./layout";
import { MenuOutlined, UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons';
import { Button, Menu } from "antd";



export default function HomePage(){
    const [ showMobileNav, setShowMobileNav ] = useState(false);
    const handleMenuClick = () => {
        console.log("hey!!!!!")
        setShowMobileNav(!showMobileNav);

    }


    return(
        <Outline>
            <TopHeader>
                <h1 className="logo">MM</h1>
                <Button className="menu" type="primary" onClick={handleMenuClick}>
                    <MenuOutlined />
                </Button>
            </TopHeader>
            <SideBar showMobileNav={showMobileNav}> 
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" icon={<UserOutlined />}>
                    nav 1
                    </Menu.Item>
                    <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                    nav 2
                    </Menu.Item>
                    <Menu.Item key="3" icon={<UploadOutlined />}>
                    nav 3
                    </Menu.Item>
                </Menu>
            </SideBar>

            <MainBody>
                <Details>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore sunt, maxime neque saepe ab aut eligendi alias voluptatum aliquam fugit, expedita magni reprehenderit, iure veritatis sit repudiandae asperiores laborum facilis temporibus. Ullam nemo architecto, nostrum ea asperiores officiis quas esse accusamus? Vero corporis reiciendis reprehenderit maiores ut voluptate eum quam aperiam, quod velit explicabo, minus nam cumque voluptatibus praesentium minima, at ullam error exercitationem consequuntur omnis animi. Ipsa explicabo magni praesentium nihil doloremque. Fuga, autem beatae quia libero possimus recusandae animi temporibus. Blanditiis cum natus assumenda laudantium sit, aut minus et nihil ducimus suscipit tempore iure asperiores. Tempora dolores pariatur eos, molestiae quidem vero magni molestias expedita esse incidunt voluptatem obcaecati. Fugit perspiciatis accusantium, nemo ex illum nulla eaque rem odio ab aliquam voluptas commodi unde quasi provident ipsam non voluptatibus obcaecati! Illum, possimus, dolore sunt nemo harum labore ratione fugit inventore atque repellendus, nisi hic adipisci quidem praesentium enim. Est, eius cupiditate, eum similique quis iusto recusandae sit maiores nisi voluptas voluptatem error, excepturi cumque! Sapiente similique blanditiis, dolorem provident velit hic consequatur consequuntur expedita quo, optio assumenda alias totam molestias facilis corporis temporibus aliquam minus facere nam adipisci incidunt aut voluptas soluta dignissimos. Vel ex modi, reiciendis a officiis consectetur cum id doloremque natus, pariatur veritatis? Inventore magnam, consequuntur voluptates dolorem beatae ducimus sapiente, eaque nam obcaecati repellendus veritatis quae necessitatibus dolorum minima nobis quod quas. Blanditiis delectus recusandae minus atque ab eligendi labore magnam fuga rem! Dolor voluptatum facere minima repellendus perferendis recusandae soluta quidem facilis porro neque ab sit et, officia fuga assumenda dolorum eveniet sed quae hic illo quo. Distinctio in adipisci sed debitis? Eius quisquam sunt, aut quae soluta ipsam provident, non officia doloribus tenetur fugit itaque officiis consequuntur vero quas porro nihil facere laborum deserunt. Quia ullam est nostrum praesentium illo quasi quas voluptates porro saepe, consectetur dignissimos accusamus itaque nobis optio consequuntur aliquam odit sunt voluptate at nisi ut reprehenderit quam perspiciatis. Incidunt reiciendis minus deleniti omnis quis nemo illo delectus suscipit voluptate alias. Ullam, consectetur nemo? Ipsum temporibus exercitationem repudiandae asperiores, et maxime itaque dolore dolorem placeat. Beatae, incidunt facilis consequatur repellat exercitationem laudantium illum quaerat tempora ducimus omnis laborum, aspernatur dolore iste, consequuntur non vitae quasi dolores dolor harum dolorem earum tempore? Cupiditate, dolore, voluptatibus itaque consequatur sed molestias harum velit repudiandae, excepturi commodi hic quibusdam fugiat omnis? Cumque repellendus accusantium provident, omnis recusandae, eius cum earum ea inventore similique in facilis. Ad eos cum suscipit, hic ipsa ipsam numquam ut? Libero alias velit saepe exercitationem? Eum ipsam aspernatur culpa assumenda ipsum, eaque quibusdam suscipit in quod fuga. Enim reprehenderit minima unde nobis hic atque rerum officia odit, blanditiis et aut officiis, suscipit nihil qui facilis quo cupiditate est sunt modi velit delectus, ea facere quos! Itaque quae ratione reprehenderit sed corporis minima, earum obcaecati quo rerum? Ipsa quo officia possimus tempore? Consequatur, aut placeat, sequi itaque sint a dolorem voluptate iure culpa quia eaque quo nam dignissimos sapiente illum, repudiandae et deleniti blanditiis corporis repellat molestias accusantium molestiae! Nam.

                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore sunt, maxime neque saepe ab aut eligendi alias voluptatum aliquam fugit, expedita magni reprehenderit, iure veritatis sit repudiandae asperiores laborum facilis temporibus. Ullam nemo architecto, nostrum ea asperiores officiis quas esse accusamus? Vero corporis reiciendis reprehenderit maiores ut voluptate eum quam aperiam, quod velit explicabo, minus nam cumque voluptatibus praesentium minima, at ullam error exercitationem consequuntur omnis animi. Ipsa explicabo magni praesentium nihil doloremque. Fuga, autem beatae quia libero possimus recusandae animi temporibus. Blanditiis cum natus assumenda laudantium sit, aut minus et nihil ducimus suscipit tempore iure asperiores. Tempora dolores pariatur eos, molestiae quidem vero magni molestias expedita esse incidunt voluptatem obcaecati. Fugit perspiciatis accusantium, nemo ex illum nulla eaque rem odio ab aliquam voluptas commodi unde quasi provident ipsam non voluptatibus obcaecati! Illum, possimus, dolore sunt nemo harum labore ratione fugit inventore atque repellendus, nisi hic adipisci quidem praesentium enim. Est, eius cupiditate, eum similique quis iusto recusandae sit maiores nisi voluptas voluptatem error, excepturi cumque! Sapiente similique blanditiis, dolorem provident velit hic consequatur consequuntur expedita quo, optio assumenda alias totam molestias facilis corporis temporibus aliquam minus facere nam adipisci incidunt aut voluptas soluta dignissimos. Vel ex modi, reiciendis a officiis consectetur cum id doloremque natus, pariatur veritatis? Inventore magnam, consequuntur voluptates dolorem beatae ducimus sapiente, eaque nam obcaecati repellendus veritatis quae necessitatibus dolorum minima nobis quod quas. Blanditiis delectus recusandae minus atque ab eligendi labore magnam fuga rem! Dolor voluptatum facere minima repellendus perferendis recusandae soluta quidem facilis porro neque ab sit et, officia fuga assumenda dolorum eveniet sed quae hic illo quo. Distinctio in adipisci sed debitis? Eius quisquam sunt, aut quae soluta ipsam provident, non officia doloribus tenetur fugit itaque officiis consequuntur vero quas porro nihil facere laborum deserunt. Quia ullam est nostrum praesentium illo quasi quas voluptates porro saepe, consectetur dignissimos accusamus itaque nobis optio consequuntur aliquam odit sunt voluptate at nisi ut reprehenderit quam perspiciatis. Incidunt reiciendis minus deleniti omnis quis nemo illo delectus suscipit voluptate alias. Ullam, consectetur nemo? Ipsum temporibus exercitationem repudiandae asperiores, et maxime itaque dolore dolorem placeat. Beatae, incidunt facilis consequatur repellat exercitationem laudantium illum quaerat tempora ducimus omnis laborum, aspernatur dolore iste, consequuntur non vitae quasi dolores dolor harum dolorem earum tempore? Cupiditate, dolore, voluptatibus itaque consequatur sed molestias harum velit repudiandae, excepturi commodi hic quibusdam fugiat omnis? Cumque repellendus accusantium provident, omnis recusandae, eius cum earum ea inventore similique in facilis. Ad eos cum suscipit, hic ipsa ipsam numquam ut? Libero alias velit saepe exercitationem? Eum ipsam aspernatur culpa assumenda ipsum, eaque quibusdam suscipit in quod fuga. Enim reprehenderit minima unde nobis hic atque rerum officia odit, blanditiis et aut officiis, suscipit nihil qui facilis quo cupiditate est sunt modi velit delectus, ea facere quos! Itaque quae ratione reprehenderit sed corporis minima, earum obcaecati quo rerum? Ipsa quo officia possimus tempore? Consequatur, aut placeat, sequi itaque sint a dolorem voluptate iure culpa quia eaque quo nam dignissimos sapiente illum, repudiandae et deleniti blanditiis corporis repellat molestias accusantium molestiae! Nam.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore sunt, maxime neque saepe ab aut eligendi alias voluptatum aliquam fugit, expedita magni reprehenderit, iure veritatis sit repudiandae asperiores laborum facilis temporibus. Ullam nemo architecto, nostrum ea asperiores officiis quas esse accusamus? Vero corporis reiciendis reprehenderit maiores ut voluptate eum quam aperiam, quod velit explicabo, minus nam cumque voluptatibus praesentium minima, at ullam error exercitationem consequuntur omnis animi. Ipsa explicabo magni praesentium nihil doloremque. Fuga, autem beatae quia libero possimus recusandae animi temporibus. Blanditiis cum natus assumenda laudantium sit, aut minus et nihil ducimus suscipit tempore iure asperiores. Tempora dolores pariatur eos, molestiae quidem vero magni molestias expedita esse incidunt voluptatem obcaecati. Fugit perspiciatis accusantium, nemo ex illum nulla eaque rem odio ab aliquam voluptas commodi unde quasi provident ipsam non voluptatibus obcaecati! Illum, possimus, dolore sunt nemo harum labore ratione fugit inventore atque repellendus, nisi hic adipisci quidem praesentium enim. Est, eius cupiditate, eum similique quis iusto recusandae sit maiores nisi voluptas voluptatem error, excepturi cumque! Sapiente similique blanditiis, dolorem provident velit hic consequatur consequuntur expedita quo, optio assumenda alias totam molestias facilis corporis temporibus aliquam minus facere nam adipisci incidunt aut voluptas soluta dignissimos. Vel ex modi, reiciendis a officiis consectetur cum id doloremque natus, pariatur veritatis? Inventore magnam, consequuntur voluptates dolorem beatae ducimus sapiente, eaque nam obcaecati repellendus veritatis quae necessitatibus dolorum minima nobis quod quas. Blanditiis delectus recusandae minus atque ab eligendi labore magnam fuga rem! Dolor voluptatum facere minima repellendus perferendis recusandae soluta quidem facilis porro neque ab sit et, officia fuga assumenda dolorum eveniet sed quae hic illo quo. Distinctio in adipisci sed debitis? Eius quisquam sunt, aut quae soluta ipsam provident, non officia doloribus tenetur fugit itaque officiis consequuntur vero quas porro nihil facere laborum deserunt. Quia ullam est nostrum praesentium illo quasi quas voluptates porro saepe, consectetur dignissimos accusamus itaque nobis optio consequuntur aliquam odit sunt voluptate at nisi ut reprehenderit quam perspiciatis. Incidunt reiciendis minus deleniti omnis quis nemo illo delectus suscipit voluptate alias. Ullam, consectetur nemo? Ipsum temporibus exercitationem repudiandae asperiores, et maxime itaque dolore dolorem placeat. Beatae, incidunt facilis consequatur repellat exercitationem laudantium illum quaerat tempora ducimus omnis laborum, aspernatur dolore iste, consequuntur non vitae quasi dolores dolor harum dolorem earum tempore? Cupiditate, dolore, voluptatibus itaque consequatur sed molestias harum velit repudiandae, excepturi commodi hic quibusdam fugiat omnis? Cumque repellendus accusantium provident, omnis recusandae, eius cum earum ea inventore similique in facilis. Ad eos cum suscipit, hic ipsa ipsam numquam ut? Libero alias velit saepe exercitationem? Eum ipsam aspernatur culpa assumenda ipsum, eaque quibusdam suscipit in quod fuga. Enim reprehenderit minima unde nobis hic atque rerum officia odit, blanditiis et aut officiis, suscipit nihil qui facilis quo cupiditate est sunt modi velit delectus, ea facere quos! Itaque quae ratione reprehenderit sed corporis minima, earum obcaecati quo rerum? Ipsa quo officia possimus tempore? Consequatur, aut placeat, sequi itaque sint a dolorem voluptate iure culpa quia eaque quo nam dignissimos sapiente illum, repudiandae et deleniti blanditiis corporis repellat molestias accusantium molestiae! Nam.
                </Details>
                <CopyRight>Music App © 2022 By Chen Huei Jan</CopyRight>
            </MainBody>
        </Outline>
    )
}