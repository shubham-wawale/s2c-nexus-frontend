import React from "react";

const Users = [
  {
    id: 1,
    selected: false,
    name: "Leanne Graham",
    email: "Sincere@april.biz",
    branch: "IT",
    batch: "2022",
    applied_on: "11th october 2001",

  },
  {
    id: 2,
    selected: false,
    name: "Ervin Howell",
    email: "Shanna@melissa.tv",
    branch: "COMPS",
    batch: "2022",
    applied_on: "11th october 2001",

  },
  {
    id: 3,
    selected: false,
    name: "Clementine Bauch",
    email: "Nathan@yesenia.net",
    branch: "IT",
    batch: "2023",
    applied_on: "11th october 2001",

  },
  {
    id: 4,
    selected: false,
    name: "Patricia Lebsack",
    email: "Julianne.OConner@kory.org",
    branch: "EXTC",
    batch: "2024",
    applied_on: "11th october 2001",

  },
  {
    id: 5,
    selected: false,
    name: "Chelsey Dietrich",
    email: "Lucio_Hettinger@annie.ca",
    branch: "INSTRUMENTATION",
    batch: "2022",
    applied_on: "11th october 2001",

  },
];

class StudentTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      List: Users,
      MasterChecked: false,
      SelectedList: [],
    };
  }

  // Select/ UnSelect Table rows
  onMasterCheck(e) {
    let tempList = this.state.List;
    // Check/ UnCheck All Items
    tempList.map((user) => (user.selected = e.target.checked));

    //Update State
    this.setState({
      MasterChecked: e.target.checked,
      List: tempList,
      SelectedList: this.state.List.filter((e) => e.selected),
    });
  }

  // Update List Item's state and Master Checkbox State
  onItemCheck(e, item) {
    let tempList = this.state.List;
    tempList.map((user) => {
      if (user.id === item.id) {
        user.selected = e.target.checked;
      }
      return user;
    });

    //To Control Master Checkbox State
    const totalItems = this.state.List.length;
    const totalCheckedItems = tempList.filter((e) => e.selected).length;

    // Update State
    this.setState({
      MasterChecked: totalItems === totalCheckedItems,
      List: tempList,
      SelectedList: this.state.List.filter((e) => e.selected),
    });
  }

  // Event to get selected rows(Optional)
  getSelectedRows() {
    this.setState({
      SelectedList: this.state.List.filter((e) => e.selected),
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <p class="card-header-title">
              <span class="icon"><i class="mdi mdi-account-multiple"></i></span>
              Applied Students
            </p>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      checked={this.state.MasterChecked}
                      id="mastercheck"
                      onChange={(e) => this.onMasterCheck(e)}
                    />
                  </th>

                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Branch</th>
                  <th scope="col">Batch</th>
                  <th scope="col">Applied on</th>
                  

                </tr>
              </thead>
              <tbody>
                {this.state.List.map((user) => (
                  <tr key={user.id} className={user.selected ? "selected" : ""}>
                    <th scope="row">
                      <input
                        type="checkbox"
                        checked={user.selected}
                        className="form-check-input"
                        id="rowcheck{user.id}"
                        onChange={(e) => this.onItemCheck(e, user)}
                      />
                    </th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.branch}</td>
                    <td>{user.batch}</td>
                    <td>{user.applied_on}</td>

                    
                    <div class="buttons right nowrap mr-7">
                      <button class="button small text-center inline-flex items-center green --jb-modal" data-target="sample-modal-2" type="button">
                        <span class="icon"><i class="mdi mdi-check"></i></span>Accept
                      </button>
                    
                      
                      <button class="button small text-center inline-flex items-center red --jb-modal" data-target="sample-modal" type="button">
                        <span class="icon"><i class="mdi mdi-window-close"></i></span>Reject
                      </button>
                      </div>

                  </tr>
                ))}
              </tbody>
            </table>
            <button
              className="btn btn-primary mt-3 ml-3"
              onClick={() => this.getSelectedRows()}
            >
              Number of selected Students: {this.state.SelectedList.length}
            </button>
            {/* <div className="row">
              <b>All Row Items:</b>
              <code>{JSON.stringify(this.state.List)}</code>
            </div>
            <div className="row">
              <b>Selected Row Items(Click Button To Get):</b>
              <code>{JSON.stringify(this.state.SelectedList)}</code>
            </div> */}
            <div class="buttons right nowrap">
              <div class="flex items-center justify-between mb-5">
                <div class="buttons">
                  <button type="button" class="button bg-sky-500 hover:bg-sky-300 ... ">Send Exam Link</button>
                  <button type="button" class="bg-transparent hover:bg-sky-500 text-blue-700 font-semibold hover:text-white py-2 px-4 mr-1.5 border border-blue-500 hover:border-transparent rounded ">Schedule Interview</button>
                  <button type="button" class="bg-transparent hover:bg-sky-500 text-blue-700 font-semibold hover:text-white py-2 px-4 mr-2 border border-blue-500 hover:border-transparent rounded">Send Offer Letter</button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StudentTable;















