import React, { Component } from 'react';
import { View, Text, ActivityIndicator, FlatList, Button, Alert, TextInput } from 'react-native';

class Review extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listing: [],
            overall_rating: '',
            price_rating: '',
            quality_rating: '',
            clenliness_rating: '',
            review_body: ''
        };
    }

    componentDidMount() {
        console.log("mounted");
        this.getData();
    }

    getData = () => {
        console.log("getting data...");
        return fetch("http://10.0.2.2:3333/api/1.0.0/location/review")
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                this.setState({
                    listing: responseJson
                })
            })
            .catch((error) => {
                console.log(error);
            });
    }

    deleteReview = (id) => {
        return fetch("http://10.0.2.2:3333/location/{loc_id}/review/{rev_id}" + id, {
            method: 'delete'
        })
            .then((response) => {
                this.getData();
                Alert.alert("Review deleted");
            })
            .catch((error) => {
                console.log(error);
            })
    }

    addReview = () => {
        let to_send = {
            overall_rating: parseInt(this.state.overall_rating),
            price_rating: parseInt(this.state.price_rating),
            quality_rating: parseInt(this.state.quality_rating),
            clenliness_rating: parseInt(this.state.clenliness_rating),
            review_body: this.state.review_body
        };

        return fetch("http://10.0.2.2:3333/review", {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(to_send)
        })
            .then((response) => {
                Alert.alert("Review added");
                this.getData();
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View>
                    <ActivityIndicator
                        size="large"
                        color="#00ff00"
                    />
                </View>
            );
        } else {
            return (
                <View>
                    <View>
                        <FlatList
                            data={this.listing}
                            renderItem={({ listing }) => (
                                <View>
                                    <Text>{item.item_name}</Text>
                                    <Button
                                        title="Delete"
                                        onPress={() => this.deleteReview(Review.overall_rating)}
                                    />
                                </View>
                            )}
                            keyExtractor={(item, index) => item.id.toString()}
                        />
                    </View>

                    <View>
                        <Text>Add an Review</Text>
                        <TextInput
                            placeholder="overall_rating"
                            onChangeText={(overall_rating) => this.setState({ overall_rating })}
                            value={this.state.overall_rating}
                        />
                        <TextInput
                            placeholder="price_rating"
                            onChangeText={(price_rating) => this.setState({ price_rating })}
                            value={this.state.price_rating}
                        />
                        <TextInput
                            placeholder="Enter quality_rating"
                            onChangeText={(quality_rating) => this.setState({ quality_rating })}
                            value={this.state.quality_rating}
                        />
                        <TextInput
                            placeholder="clenliness_rating"
                            onChangeText={(clenliness_rating) => this.setState({ clenliness_rating })}
                            value={this.state.clenliness_rating}
                        />
                        <TextInput
                            placeholder="review"
                            onChangeText={(review_body) => this.setState({ review_body })}
                            value={this.state.review_body}
                        />
                        <Button
                            title="Add"
                            onPress={() => this.addReview()}
                        />
                    </View>
                </View>
            );
        }
    }
}

export default Review;