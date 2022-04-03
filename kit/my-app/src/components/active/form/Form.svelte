<script>
	import { Form, Field, ErrorMessage, Select } from 'svelte-forms-lib';
	import * as yup from 'yup';
	import { mutate } from './submitButton';

	const initialValues = {
		name: '',
		country: '',
		city: '',
		email: '',
		telephone: '',
		newsletter: '',
		project_type: '',
		work_field: '',
		startTime: '',
		comment: ''
	};

	const validationSchema = yup.object().shape({
		country: yup.string(),
		city: yup.string(),
		newsletter: yup.string(),
		telephone: yup.string(),
		work_field: yup.string(),
		startTime: yup.string(),
		name: yup.string().required('Name is required'),
		email: yup.string().required('Email is required').email('Email is invalid'),
		password: yup.string().required('Password is required'),
		// confirmPassword: yup
		// 	.string()
		// 	.required('Please confirm your password')
		// 	.oneOf([yup.ref('password'), null], 'Passwords do not match'),
		project_type: yup.string().required('Project type is required'),
		comment: yup.string(),

	});

	const onSubmit = values => {
		console.log("on submit working")
		alert(JSON.stringify(values));
		console.log("values",values)
		 mutate(values)
	};

	const formProps = { initialValues, validationSchema, onSubmit };
</script>

<div class="container">
	<h1>Yes, sign me up:</h1>
	<Form {...formProps}>
		<div class="thisForm">
			<div>
				<div class="leftbox">
					<label for="name">Name*</label>
				</div>
				<div class="rightbox">
					<Field type="text" name="name" placeholder="Name" />
					<ErrorMessage name="name" style="color: red;" />
				</div>
			</div>
			<div>
				<div class="leftbox">
					<label for="country">Country</label>
				</div>
				<div class="rightbox">
					<Field type="text" name="country" placeholder="Country" />
					<ErrorMessage name="country" style="color: red;" />
				</div>
			</div>
			<!-- <div>
				<div class="leftbox">
					<label for="city">City</label>
				</div>
				<div class="rightbox">
					<Field type="text" name="city" placeholder="City" />
					<ErrorMessage name="city" style="color: red;" />
				</div>
			</div>
			<div>
				<div class="leftbox">
					<label for="email">Email*</label>
				</div>
				<div class="rightbox">
					<Field type="email" name="email" placeholder="Email" />
					<ErrorMessage name="email" style="color: red;" />
				</div>
			</div>
			<div>
				<div class="leftbox">
					<label for="newsletter">Sign up for Newsletter</label>
				</div>
				<div class="rightbox">
					<Field type="checkbox" name="newsletter" />
					<ErrorMessage name="newsletter" style="color: red;" />
				</div>
			</div>
			<div>
				<div class="leftbox">
					<label for="telephone">Telephone number</label>
				</div>
				<div class="rightbox">
					<Field type="text" name="telephone" placeholder="Telephone" />
					<ErrorMessage name="telephone" style="color: red;" />
				</div>
			</div>

			<div>
				<div class="leftbox">
					<label for="project_type" value="">Choose project types (use CTRL for multiple)*</label>
				</div>
				<div class="rightbox">
					<div class="select">
						<Select name="project_type" multiple>
							<option value="Eating">Presentation page with form</option>
							<option value="Eating">Blog</option>
							<option value="Reading">Webshop</option>
							<option value="Sleeping">Presentation website</option>
						</Select>
						<ErrorMessage name="project_type" style="color: red;" />
					</div>
				</div>
			</div>
			<div>
				<div class="leftbox">
					<label for="work_field">Area of activity</label>
				</div>
				<div class="rightbox">
					<Field type="text" name="work_field" placeholder="Area of activity" />
					<ErrorMessage name="work_field" style="color: red;" />
				</div>
			</div>
			<div>
				<div class="leftbox">
					<label for="startTime">Business start date</label>
				</div>
				<div class="rightbox">
					<Field type="date" name="startTime" placeholder="startTime" />
					<ErrorMessage name="startTime" style="color: red;" />
				</div>
			</div>
			<div>
				<div class="leftbox">
					<label for="comment">Your comment</label>
				</div>
				<div class="rightbox">
					<Field type="text" name="comment" placeholder="..." />
					<ErrorMessage name="comment" style="color: red;" />
				</div>
			</div> -->
			<p style="font-size: 14px; text-align: left;">* Required</p>

			<div>
				<button class="submitbutton" type="submit" >Sign up</button>
			</div>
		</div>
	</Form>
</div>

<style>
	.container {
		width: 480px;
		margin: 0 auto;
	}

	.container h1 {
		margin: 40px;
	}
	.thisForm > div {
		text-align: left;
		margin: 22px 0px;
		display: flex;
		justify-content: space-between;
	}

	.thisForm > div > .leftbox {
		text-align: left;
		max-width: 200px;
	}
	.thisForm > div > .rightbox {
		text-align: left;
		max-width: 200px;
		width: 50%;
	}

	.submitbutton {
		margin: 0 auto;
		margin-top: 10px;
		width: 150px;
		height: 41px;
	}

	@media only screen and (max-width: 600px) {
		.container {
			width: 320px;
		}

		.thisForm > div {
			text-align: left;
			margin: 22px 0px;
			display: flex;
			justify-content: space-between;
		}

		.thisForm > div > .rightbox {
			max-width: 50%;
		}

		.submitbutton {
			margin: 0 auto;
			margin-top: 10px;
			width: 150px;
			height: 50px;
		}
	}
</style>
