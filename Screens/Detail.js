import React, { useState } from "react";
import { Text, StyleSheet, View, Image, ScrollView } from "react-native";

const DATA = {
    title: 'Đà Nẵng phun hoá chất khu vực có 4 ca nghi nhiễm nCoV',
    fcontent: 'Chiều nay, nhiều xe phun hoá chất chuyên dụng của Quân khu 5 tập trung trước Công viên 29/3, sau khi Đà Nẵng ghi nhận bốn người dương tính với nCoV. Nhận xong hóa chất Cloramin B, hơn 30 chiến sĩ lên các xe toả đi nhiều hướng để bắt đầu khử khuẩn môi trường tại hai khu chợ và một số tuyến đường chính.',
    lcontent: 'Tại khu vực chợ Tân Lập, nơi Sở Y tế vừa thông báo có một ca dương tính với nCoV, hai xe chuyên dụng đảm nhận việc phun toàn bộ cổng chợ và các tuyến đường xung quanh như Phạm Văn Nghị, Nguyễn Tri Phương. Trong khi đó, sáu chiến sĩ mang bình phun hoá chất đeo vai tiến vào khu vực các quầy hàng của tiểu thương. Một vòi phun di động cũng được kéo vào tận các ngõ, hẻm xung quanh để khử khuẩn. Tại chợ Siêu Thị trên đường Võ Văn Tần, quân đội cũng phun hoá chất từ trong ra ngoài. Khu chợ này được Sở Y tế thông báo có hai ca dương tính với nCoV và phải dừng hoạt động từ 16h ngày 21/8, cùng với chợ Tân Lập.',
}

const Detail = ({ route }) => {
    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.baseText}>
                <View style={styles.header}>
                    <Text style={styles.titleText}>{DATA.title}</Text>
                </View>
                <View style={styles.header}>
                    <Image
                        style={styles.tinyLogo}
                        source={DATA.image}
                    />
                </View>
                <View style={styles.header}>
                    <Text style={styles.titlelcontent}>{DATA.fcontent}</Text>
                </View>
                <View style={styles.header}>
                    <Text style={styles.titlelcontent}>{DATA.lcontent}</Text>
                </View>

            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    baseText: {
        flexDirection: 'column',
        padding: 20,
    },
    titleText: {
        fontSize: 20,
        fontWeight: "bold"
    },
    titlelcontent: {
        fontSize: 16,
    },
    tinyLogo: {
        height: 200,
        width: '100%',
    },
    header:{
        marginBottom:20
    }
});

export default Detail;

