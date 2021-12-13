// import { useFormik } from "formik"
import * as yup from 'yup';


// // call validation -> if pass -> call onSubmit
// const formValidation = (values) => {

//     const errors = {};
//     console.log("formValidation", values);

//     if (values.email.length < 5) {
//         errors.password = "Please enter longer email"
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
//         errors.email = "Please enter a valid email"
//     }

//     if (values.password.length < 8) {
//         errors.password = "Please enter longer password"
//     } else if (values.password.length > 12) {
//         errors.password = "Please enter shorter password"
//     }
//     console.log(errors)
//     return errors
//     // errors object sgould be empty for onSubmit to nwork
// }

// export function BasicForm() {
//     const formik = useFormik({
//         initialValues: { email: "", password: "" },
//         validate: formValidation,
//         onSubmit: (values) => {
//             console.log("onSubmit", values)
//         }
//     })

//     return (
//         <form onSubmit={formik.handleSubmit} >
//             {/* prevents refrshing the whole page */}
//             <h2>Basic Form</h2>
//             <input onBlur={formik.handleBlur} id="email" name="email" value={formik.values.email} type="email" placeholder="Please enter your email" onChange={formik.handleChange} />
//             {formik.errors.email && formik.touched.email ? formik.errors.email : ""}
//             <input onBlur={formik.handleBlur} id="password" name="password" value={formik.values.password} type="password" placeholder="Please enter your password" onChange={formik.handleChange} />
//             {formik.errors.password && formik.touched.password ? formik.errors.password : ""}
//             <button type="submit">Submit</button>
//         </form>
//     );
// }


import { useFormik } from "formik"

// using destructuring

// call validation -> if pass -> call onSubmit
const formValidation = (values) => {

    const errors = {};
    console.log("formValidation", values);

    if (values.email.length < 5) {
        errors.password = "Please enter longer email"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Please enter a valid email"
    }

    if (values.password.length < 8) {
        errors.password = "Please enter longer password"
    } else if (values.password.length > 12) {
        errors.password = "Please enter shorter password"
    }
    console.log(errors)
    return errors
    // errors object should be empty for onSubmit to nwork
}

const formValidationSchema = yup.object({
    email: yup.string().min(5, "Need a bigger email").matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, "Pattern not matched").required(),
    password: yup.string().min(8, "Please enter longer password").max(12, "Please enter shorter password").required("please fill this field"),
})

export function BasicForm() {

    // using destructuring
    const { handleSubmit, values, handleBlur, handleChange, errors, touched } = useFormik({
        initialValues: { email: "", password: "" },

        // validate: formValidation,
        // onSubmit is called only if validate passes

        // using yup
        validationSchema: formValidationSchema,
        onSubmit: (values) => {
            console.log("onSubmit", values)
        }


    })

    return (
        <form onSubmit={handleSubmit} >
            {/* prevents refrshing the whole page */}
            <h2>Basic Form</h2>

            <input onBlur={handleBlur} id="email" name="email" value={values.email} type="email" placeholder="Please enter your email" onChange={handleChange} />
            {errors.email && touched.email ? errors.email : ""}

            <input onBlur={handleBlur} id="password" name="password" value={values.password} type="password" placeholder="Please enter your password" onChange={handleChange} />
            {errors.password && touched.password ? errors.password : ""}

            <button type="submit">Submit</button>
        </form>
    );
}

