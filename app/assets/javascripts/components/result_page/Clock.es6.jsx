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


	monthAsWord(number) {
		switch (number) {
			case 0:
				return 'Jan'
			case 1:
				return 'Feb'
			case 2:
				return 'Mar'
			case 3:
				return 'Apr'
			case 4:
				return 'May'
			case 5:
				return 'June'
			case 6:
				return 'July'
			case 7:
				return 'Aug'
			case 8:
				return 'Sept'
			case 9:
				return 'Oct'
			case 10:
				return 'Nov'
			case 11:
				return 'Dec'
		}
	}

	componentDidMount() {
		setInterval(() => {
			var p = new Date();
			this.setState ({
			m: p.getMinutes(),
			s: p.getSeconds(),
			h: p.getHours(),
			month: this.monthAsWord(p.getMonth()),
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
