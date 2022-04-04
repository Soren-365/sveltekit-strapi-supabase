<script>
	import { createForm, Form, Field, ErrorMessage, Select } from 'svelte-forms-lib';
	import * as yup from 'yup';
	import { mutate } from './submitButton';

	const initialValues = {
		name: '',
		country: '',
		city: '',
		email: '',
		telephone: '',
		newsletter: false,
		project_type: '',
		work_field: '',
		start_time: new Date().toISOString().slice(0, 10),
		comment: ''
	};

	const validationSchema = yup.object().shape({
		country: yup.string(),
		city: yup.string(),
		newsletter: yup.boolean().nullable(),
		telephone: yup.string(),
		work_field: yup.string(),
		start_time: yup.date().nullable(),
		name: yup.string().required('Name is required'),
		email: yup.string().required('Email is required').email('Email is invalid'),
		//password: yup.string().required('Password is required'),
		// confirmPassword: yup
		// 	.string()
		// 	.required('Please confirm your password')
		// 	.oneOf([yup.ref('password'), null], 'Passwords do not match'),
		project_type: yup.string().required('Project type is required'),//.mixed().oneOf(['male', 'female', 'other'] as const).defined(),
		
		comment: yup.string()
	});

	const onSubmit = (values) => {
		console.log('on submit working');
		//alert(JSON.stringify(values));
		console.log('values', values);
		mutate(values);
	};
	console.log('form is working');
	const { form, errors, state, handleChange, handleSubmit } = createForm({
		initialValues,
		validationSchema,
		onSubmit
	});

</script>

<div class="container">
	<h1>Yes, sign me up:</h1>
	<form on:submit={handleSubmit}>
		<div class="thisForm">
			<div>
				<div class="leftbox">
					<label for="name">Name*</label>
				</div>
				<div class="rightbox">
					<input
						on:change={handleChange}
						bind:value={$form.name}
						type="text"
						name="name"
						placeholder="Name"
					/>
					{#if $errors.name}
						<div style="color:red;">
							<small> {$errors.name}</small>
						</div>
					{/if}
				</div>
			</div>
			<div>
				<div class="leftbox">
					<label for="country">Country</label>
				</div>
				<div class="rightbox">
					<input
						on:change={handleChange}
						bind:value={$form.country}
						type="text"
						name="country"
						placeholder="Country"
					/>
					{#if $errors.county}
						<div style="color:red;">
							<small> {$errors.country}</small>
						</div>
					{/if}
				</div>
			</div>
			<div>
				<div class="leftbox">
					<label for="city">City</label>
				</div>
				<div class="rightbox">
					<input
						on:change={handleChange}
						bind:value={$form.city}
						type="text"
						name="city"
						placeholder="City"
					/>
					{#if $errors.city}
						<div style="color:red;">
							<small> {$errors.city}</small>
						</div>
					{/if}
				</div>
			</div>
			<div>
				<div class="leftbox">
					<label for="email">Email*</label>
				</div>
				<div class="rightbox">
					<input
						on:change={handleChange}
						bind:value={$form.email}
						type="email"
						name="email"
						placeholder="Email"
					/>
					{#if $errors.email}
						<div style="color:red;">
							<small> {$errors.email}</small>
						</div>
					{/if}
				</div>
			</div>
			<div>
				<div class="leftbox">
					<label for="newsletter">Sign up for Newsletter</label>
				</div>
				<div class="rightbox">
					<input
						on:change={handleChange}
						bind:value={$form.newsletter}
						type="checkbox"
						name="newsletter"
										/>
					{#if $errors.newsletter}
						<div style="color:red;">
							<small> {$errors.newsletter}</small>
						</div>
					{/if} 
				</div>
			</div>
			<div>
				<div class="leftbox">
					<label for="telephone">Telephone number</label>
				</div>
				<div class="rightbox">
					<input
						on:change={handleChange}
						bind:value={$form.telephone}
						type="text"
						name="telephone"
						placeholder="Telephone"
					/>
					{#if $errors.telephone}
						<div style="color:red;">
							<small> {$errors.telephone}</small>
						</div>
					{/if}			</div>
			</div>

			<div>
				<div class="leftbox">
					<label for="project_type" value="">Choose project types (use CTRL for multiple)*</label>
				</div>
				<div class="rightbox">
					<div class="select">
						<select
							name="project_type"
							on:change={handleChange}
							bind:value={$form.project_type}	
							placeholder="Choose"						
						><option value="" disabled selected>Select your option</option>
							<option value="Presentation page with form">Presentation page with form</option>
							<option value="Blog">Blog</option>
							<option value="Webshop">Webshop</option>
							<option value="Presentation website">Presentation website</option>
							<option value="Presentation website">Other type</option>
						</select>
						{#if $errors.project_type}
							<div style="color:red;">
								<small> {$errors.project_type}</small>
							</div>
						{/if}
					</div>
				</div>
			</div>
			<div>
				<div class="leftbox">
					<label for="work_field">Area of activity</label>
				</div>
				<div class="rightbox">
					<input
						type="text"
						name="work_field"
						placeholder="Area of activity"
						on:change={handleChange}
						bind:value={$form.work_field}
					/>
					{#if $errors.work_field}
						<div style="color:red;">
							<small> {$errors.work_field}</small>
						</div>
					{/if} 
				</div>
			</div>
			<div>
				<div class="leftbox">
					<label for="start_time">Activity start date</label>
				</div>
				<div class="rightbox">
					<input
						on:change={handleChange}
						bind:value={$form.start_time}
						type="date"
						name="start_time"
					
						placeholder="start_time"
					/>
					{#if $errors.start_time}
						<div style="color:red;">
							<small> {$errors.start_time}</small>
						</div>
					{/if}
				</div>
			</div>
			<div>
				<div class="leftbox">
					<label for="comment">Your comment</label>
				</div>
				<div class="rightbox">
					<input
						on:change={handleChange}
						bind:value={$form.comment}
						type="text"
						name="comment"
						placeholder="..."
					/>
					{#if $errors.comment}
						<div style="color:red;">
							<small> {$errors.comment}</small>
						</div>
					{/if}
				</div>
			</div>
			<p style="font-size: 14px; text-align: left;">* Required</p>

			<div>
				<button class="submitbutton" type="submit">Sign up</button>
			</div>
		</div>
	</form>
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
