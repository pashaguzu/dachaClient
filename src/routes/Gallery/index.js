/**
 * Created by Павел on 04.04.2018.
 */
/**
 * Created by Pavel on 09.12.2017.
 */
import React from 'react';
import {Card} from 'antd';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
class PhotoGallery extends React.Component {

    render() {

        const images = [
            {
                original: 'https://pp.userapi.com/c637528/v637528217/4fed5/nZqyenDztng.jpg',
                thumbnail:'https://pp.userapi.com/c637528/v637528217/4fed5/nZqyenDztng.jpg'
            },
            {
                original: 'https://pp.userapi.com/c626122/v626122542/53ee1/IuCMtXqGxrE.jpg',
                thumbnail:'https://pp.userapi.com/c626122/v626122542/53ee1/IuCMtXqGxrE.jpg'
            }
        ]

        return (
            <center>
            <Card style={{ width: 800 }}>
            <ImageGallery items={images} />
                </Card>
                </center>
        );
    }
}

export default PhotoGallery;