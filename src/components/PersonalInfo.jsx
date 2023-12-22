const PersonalInfo = (props) => {
	const { name, age, email, phone } = props;
	return (
		<div className="personal-info">
			<h2>Bio Data of {name}</h2>
			<hr />
			<h2>Personal Information</h2>
			<p>
				<strong>Email:</strong>
				{email}
			</p>
			{phone && (
				<p>
					<strong>Phone:</strong>
					{phone}
				</p>
			)}
			<p>
				<strong>Age:</strong>
				{age}
			</p>
		</div>
	);
};

export default PersonalInfo;
