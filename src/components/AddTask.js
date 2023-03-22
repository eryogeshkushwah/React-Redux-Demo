import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../actions";
import { YupValidation } from "./YupValidation";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const AddTask = () => {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{ add: "" }}
      validationSchema={YupValidation}
      onSubmit={(values, { resetForm }) => {
        alert("Task successfully added");
        dispatch(addTask(values.add));
        resetForm();
      }}
    >
      <Form>
        <div class="container m-5 p-2 rounded mx-auto bg-light shadow">
          <div class="row m-1 p-4">
            <div class="col">
              <div class="p-1 h1 text-primary text-center mx-auto display-inline-block">
                <i class="fa fa-check bg-primary text-white rounded p-2"></i>
                <u>Add Task</u>
              </div>
            </div>
          </div>
          <div class="row m-1 p-3">
            <div class="col col-11 mx-auto">
              <div class="row bg-white rounded shadow-sm p-2 add-todo-wrapper align-items-center justify-content-center">
                <div class="col">
                  <Field
                    name="add"
                    type="text"
                    placeholder="Add new .."
                    class="form-control form-control-lg border-0 add-todo-input bg-transparent rounded"
                  />
                </div>

                <div class="col-auto px-0 mx-0 mr-2">
                  <button type="submit" class="btn btn-primary">
                    Add
                  </button>
                </div>
              </div>
              <ErrorMessage class="text-danger" component="div" name="add" />
            </div>
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default AddTask;
