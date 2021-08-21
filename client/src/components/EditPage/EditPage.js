import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../index";
import * as Yup from "yup";
import { Button, TextField, Typography } from "@material-ui/core";
import { notifySuccess } from "../../helpers/notifiers";
import { useHistory, useParams } from "react-router";
export default function EditPage() {
    const [initialValues, setInitialValues] = useState({
        name: "",
        price: null,
        image: "",
    });

    const { id } = useParams();

    const { fetchOneDevice, editItem, fetchDevices, createDevice } =
        useContext(Context);

    console.log(fetchOneDevice);

    useEffect(() => {
        fetchOneDevice(id);
    }, []);

    useEffect(() => {
        if (fetchOneDevice) {
            setInitialValues({
                ...fetchOneDevice,
                // images: movieDetail.images[0],
            });
        }
    }, [fetchOneDevice]);

    const history = useHistory();

    const validationSchema = Yup.object({
        name: Yup.string().required("Обязательное поле!"),
        // descriptions: Yup.string().required("Обязательное поле!"),
        price: Yup.number()
            .typeError("Введите число!")
            .required("Обязательное поле!"),
        image: Yup.string().required("Обязательное поле!"),
        //   .typeError("Введите число!")
        //   .required("Обязательное поле!"),
        // likes: Yup.number()
        //   .typeError("Введите число!")
        //   .required("Обязательное поле!"),
    });
    const onSubmit = (values) => {
        console.log(values);
        editItem(id, {
            ...values,
            // images: [values.images],
        }).then(() => {
            notifySuccess("Продукт был изменен!");
            history.push(`/device/${id}`);
        });
    };

    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
                enableReinitialize
            >
                {({ values }) => (
                    <>
                        <Typography style={{ color: "white", textAlign: "center" }} variant="h4">Изменение продукта</Typography>
                        <Form>
                            <label>Movie Name</label>
                            <Field
                                name="title"
                                variant="outlined"
                                as={TextField}
                            />
                            <label>Image</label>
                            <Field
                                name="images"
                                variant="outlined"
                                as={TextField}
                            />

                            <label>Description</label>
                            <Field
                                variant="outlined"
                                rows={8}
                                multiline
                                name="descriptions"
                                as={TextField}
                            />

                            <label>Duration</label>
                            <Field
                                name="duration"
                                variant="outlined"
                                as={TextField}
                            />
                            <label>Price</label>
                            <Field
                                name="price"
                                variant="outlined"
                                as={TextField}
                            />
                            <label>Year</label>
                            <Field
                                name="year"
                                variant="outlined"
                                as={TextField}
                            />
                            <label>Producer</label>
                            <Field
                                name="producer"
                                variant="outlined"
                                as={TextField}
                            />
                            <label>Age Limit</label>
                            <Field
                                name="age_limit"
                                variant="outlined"
                                as={TextField}
                            />
                            <label>Country</label>
                            <Field
                                name="country"
                                variant="outlined"
                                as={TextField}
                            />
                            <label>Quantity</label>
                            <Field
                                name="quantity"
                                variant="outlined"
                                as={TextField}
                            />
                            <Button type="submit" color="primary" variant="contained">
                                Изменить
                            </Button>
                        </Form>
                    </>
                )}
            </Formik>
        </>
    );
}