class Clock extends React.Component {

	constructor() {
		super()
		this.state = {
			m: '',
			s: '',
			h: '',
			month: '',
			day: '',
			year: '',
		}
	}


	componentDidMount() {
		setInterval(() => {
			var p = new Date();
			this.setState ({
			m: p.getMinutes(),
			s: p.getSeconds(),
			h: p.getHours(),
			month: p.getMonth() + 1,
			day: p.getDate(),
			year: p.getFullYear()
			})

			if (s < 10) {
				this.setState({ s: '0'+s})
			}

			if (m < 10) {
				this.setState({m: '0'+m})
			}

			if (h < 10) {
				this.setState({h: '0'+h})
			};
		}, 500);
	}

	  render() {

			return (
					<h1>
					<p className="date">
						<span>
							{this.state.month}
						</span>
						<span>
							{this.state.day}
						</span>
						<span>
							{this.state.year}
						</span>
					</p>
					<p className="hour">
						<span>
							{this.state.h}
						</span>
						<span>
							{this.state.m}
						</span>
						<span>
							{this.state.s}
						</span>
					</p>
				</h1>
			)
		}

}
