import { useState } from "react"

const SettingText = () => {
	const [text, setText] = useState("");

	const handleText = (e) => {
		setText(e.target.value)
	};

	return {
		text,
		handleText
	};
};

export default SettingText;