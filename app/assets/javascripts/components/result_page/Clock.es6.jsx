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
			h: p.getHours() % 12,
			month: this.monthAsWord(p.getMonth()),
			day: p.getDate(),
			year: p.getFullYear()
			})

			if (this.state.s < 10) {
				this.setState({ s: '0'+this.state.s})
			}

			if (this.state.m < 10) {
				this.setState({m: '0'+this.state.m})
			}

			if (this.state.h < 10) {
				this.setState({h: '0'+this.state.h})
			};
		}, 500);
	}

	  render() {

			return (
					<div className="clock-container">
					<span className="hour">
						<span className="clock-pieces">
							{this.state.h}:
						</span>
						<span className="clock-pieces">
							{this.state.m}:
						</span>
						<span className="clock-pieces">
							{this.state.s}
						</span>
					</span>
					<span className="date">
						<span className="clock-pieces">
							{this.state.day}
						</span>
						<span className="clock-pieces">
							{this.state.month}
						</span>
						<span className="clock-pieces">
							{this.state.year}
						</span>
					</span>
				</div>
			)
		}

}
