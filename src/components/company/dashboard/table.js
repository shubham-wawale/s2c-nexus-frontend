import React from "react";
export default function StudentTable() {
    return (


<section class="section main-section">

        <div class="card has-table"> 
          <header class="card-header">
            <p class="card-header-title">
              <span class="icon"><i class="mdi mdi-account-multiple"></i></span>
              Applied Students
            </p>
            {/* <a href="#" class="card-header-icon">
              <span class="icon"><i class="mdi mdi-reload"></i></span>
            </a> */}
          </header>
          <div class="card-content">
            <table>
              <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Branch</th>
                <th>Email-Id</th>
                <th>Batch</th>
                <th>Applied On</th>  
              </tr>
              </thead>
              <tbody>
              <tr>
                <td class="check-cell">
                <div class="flex items-center">
                        <input id="checkbox-table-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-table-1" class="sr-only">checkbox</label>
                    </div>
                </td>
                <td data-label="Name">Riya Patel</td>
                <td data-label="Branch">IT</td>
                <td data-label="Email-Id">riyapatel@gmail.com</td>
                <td data-label="Batch">2023</td>

                <td data-label="Applied On">
                  <small class="text-gray-500" title="Oct 25, 2021">Oct 25, 2021</small>
                </td>
                <td class="actions-cell">
                  <div class="buttons right nowrap">
                    <button class="button small text-center inline-flex items-center green --jb-modal"  data-target="sample-modal-2" type="button">
                      <span class="icon"><i class="mdi mdi-check"></i></span>Accept
                    </button>
                    <button class="button small text-center inline-flex items-center red --jb-modal" data-target="sample-modal" type="button">
                      <span class="icon"><i class="mdi mdi-window-close"></i></span>Reject
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
              <td class="check-cell">
                <div class="flex items-center">
                        <input id="checkbox-table-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-table-1" class="sr-only">checkbox</label>
                    </div>
                </td>
                <td data-label="Name">Riya Patel</td>
                <td data-label="Branch">IT</td>
                <td data-label="Email-Id">riyapatel@gmail.com</td>
                <td data-label="Batch">2023</td>

                <td data-label="Applied On">
                  <small class="text-gray-500" title="Oct 25, 2021">Oct 25, 2021</small>
                </td>
                <td class="actions-cell">
                  <div class="buttons right nowrap">
                  

                    <button class="button small green --jb-modal"  data-target="sample-modal-2" type="button">
                      <span class="icon"><i class="mdi mdi-check"></i></span>
                    </button>
                    <button class="button small red --jb-modal" data-target="sample-modal" type="button">
                      <span class="icon"><i class="mdi mdi-window-close"></i></span>
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
              <td class="check-cell">
                <div class="flex items-center">
                        <input id="checkbox-table-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-table-1" class="sr-only">checkbox</label>
                    </div>
                </td>
                <td data-label="Name">Riya Patel</td>
                <td data-label="Branch">IT</td>
                <td data-label="Email-Id">riyapatel@gmail.com</td>
                <td data-label="Batch">2023</td>

                <td data-label="Applied On">
                  <small class="text-gray-500" title="Oct 25, 2021">Oct 25, 2021</small>
                </td>
                <td class="actions-cell">
                  <div class="buttons right nowrap">
                  

                    <button class="button small green --jb-modal"  data-target="sample-modal-2" type="button">
                      <span class="icon"><i class="mdi mdi-check"></i></span>
                    </button>
                    <button class="button small red --jb-modal" data-target="sample-modal" type="button">
                      <span class="icon"><i class="mdi mdi-window-close"></i></span>
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
              <td class="check-cell">
                <div class="flex items-center">
                        <input id="checkbox-table-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-table-1" class="sr-only">checkbox</label>
                    </div>
                </td>
                <td data-label="Name">Riya Patel</td>
                <td data-label="Branch">IT</td>
                <td data-label="Email-Id">riyapatel@gmail.com</td>
                <td data-label="Batch">2023</td>

                <td data-label="Applied On">
                  <small class="text-gray-500" title="Oct 25, 2021">Oct 25, 2021</small>
                </td>
                <td class="actions-cell">
                  <div class="buttons right nowrap">
                  

                    <button class="button small green --jb-modal"  data-target="sample-modal-2" type="button">
                      <span class="icon"><i class="mdi mdi-check"></i></span>
                    </button>
                    <button class="button small red --jb-modal" data-target="sample-modal" type="button">
                      <span class="icon"><i class="mdi mdi-window-close"></i></span>
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
              <td class="check-cell">
                <div class="flex items-center">
                        <input id="checkbox-table-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-table-1" class="sr-only">checkbox</label>
                    </div>
                </td>
                <td data-label="Name">Riya Patel</td>
                <td data-label="Branch">IT</td>
                <td data-label="Email-Id">riyapatel@gmail.com</td>
                <td data-label="Batch">2023</td>

                <td data-label="Applied On">
                  <small class="text-gray-500" title="Oct 25, 2021">Oct 25, 2021</small>
                </td>
                <td class="actions-cell">
                  <div class="buttons right nowrap">
                  

                    <button class="button small green --jb-modal"  data-target="sample-modal-2" type="button">
                      <span class="icon"><i class="mdi mdi-check"></i></span>
                    </button>
                    <button class="button small red --jb-modal" data-target="sample-modal" type="button">
                      <span class="icon"><i class="mdi mdi-window-close"></i></span>
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
              <td class="check-cell">
                <div class="flex items-center">
                        <input id="checkbox-table-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-table-1" class="sr-only">checkbox</label>
                    </div>
                </td>
                <td data-label="Name">Riya Patel</td>
                <td data-label="Branch">IT</td>
                <td data-label="Email-Id">riyapatel@gmail.com</td>
                <td data-label="Batch">2023</td>

                <td data-label="Applied On">
                  <small class="text-gray-500" title="Oct 25, 2021">Oct 25, 2021</small>
                </td>
                <td class="actions-cell">
                  <div class="buttons right nowrap">
                  

                    <button class="button small green --jb-modal"  data-target="sample-modal-2" type="button">
                      <span class="icon"><i class="mdi mdi-check"></i></span>
                    </button>
                    <button class="button small red --jb-modal" data-target="sample-modal" type="button">
                      <span class="icon"><i class="mdi mdi-window-close"></i></span>
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
              <td class="check-cell">
                <div class="flex items-center">
                        <input id="checkbox-table-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-table-1" class="sr-only">checkbox</label>
                    </div>
                </td>
                <td data-label="Name">Riya Patel</td>
                <td data-label="Branch">IT</td>
                <td data-label="Email-Id">riyapatel@gmail.com</td>
                <td data-label="Batch">2023</td>

                <td data-label="Applied On">
                  <small class="text-gray-500" title="Oct 25, 2021">Oct 25, 2021</small>
                </td>
                <td class="actions-cell">
                  <div class="buttons right nowrap">
                  

                    <button class="button small green --jb-modal"  data-target="sample-modal-2" type="button">
                      <span class="icon"><i class="mdi mdi-check"></i></span>
                    </button>
                    <button class="button small red --jb-modal" data-target="sample-modal" type="button">
                      <span class="icon"><i class="mdi mdi-window-close"></i></span>
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
              <td class="check-cell">
                <div class="flex items-center">
                        <input id="checkbox-table-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-table-1" class="sr-only">checkbox</label>
                    </div>
                </td>
                <td data-label="Name">Riya Patel</td>
                <td data-label="Branch">IT</td>
                <td data-label="Email-Id">riyapatel@gmail.com</td>
                <td data-label="Batch">2023</td>

                <td data-label="Applied On">
                  <small class="text-gray-500" title="Oct 25, 2021">Oct 25, 2021</small>
                </td>
                <td class="actions-cell">
                  <div class="buttons right nowrap">
                  

                    <button class="button small green --jb-modal"  data-target="sample-modal-2" type="button">
                      <span class="icon"><i class="mdi mdi-check"></i></span>
                    </button>
                    <button class="button small red --jb-modal" data-target="sample-modal" type="button">
                      <span class="icon"><i class="mdi mdi-window-close"></i></span>
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
              <td class="check-cell">
                <div class="flex items-center">
                        <input id="checkbox-table-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-table-1" class="sr-only">checkbox</label>
                    </div>
                </td>
                <td data-label="Name">Riya Patel</td>
                <td data-label="Branch">IT</td>
                <td data-label="Email-Id">riyapatel@gmail.com</td>
                <td data-label="Batch">2023</td>

                <td data-label="Applied On">
                  <small class="text-gray-500" title="Oct 25, 2021">Oct 25, 2021</small>
                </td>
                <td class="actions-cell">
                  <div class="buttons right nowrap">
                  

                    <button class="button small green --jb-modal"  data-target="sample-modal-2" type="button">
                      <span class="icon"><i class="mdi mdi-check"></i></span>
                    </button>
                    <button class="button small red --jb-modal" data-target="sample-modal" type="button">
                      <span class="icon"><i class="mdi mdi-window-close"></i></span>
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
              <td class="check-cell">
                <div class="flex items-center">
                        <input id="checkbox-table-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-table-1" class="sr-only">checkbox</label>
                    </div>
                </td>
                <td data-label="Name">Riya Patel</td>
                <td data-label="Branch">IT</td>
                <td data-label="Email-Id">riyapatel@gmail.com</td>
                <td data-label="Batch">2023</td>

                <td data-label="Applied On">
                  <small class="text-gray-500" title="Oct 25, 2021">Oct 25, 2021</small>
                </td>
                <td class="actions-cell">
                  <div class="buttons right nowrap">
                  

                    <button class="button small green --jb-modal"  data-target="sample-modal-2" type="button">
                      <span class="icon"><i class="mdi mdi-check"></i></span>
                    </button>
                    <button class="button small red --jb-modal" data-target="sample-modal" type="button">
                      <span class="icon"><i class="mdi mdi-window-close"></i></span>
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
              <td class="check-cell">
                <div class="flex items-center">
                        <input id="checkbox-table-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-table-1" class="sr-only">checkbox</label>
                    </div>
                </td>
                <td data-label="Name">Riya Patel</td>
                <td data-label="Branch">IT</td>
                <td data-label="Email-Id">riyapatel@gmail.com</td>
                <td data-label="Batch">2023</td>

                <td data-label="Applied On">
                  <small class="text-gray-500" title="Oct 25, 2021">Oct 25, 2021</small>
                </td>
                <td class="actions-cell">
                  <div class="buttons right nowrap">
                  

                    <button class="button small green --jb-modal"  data-target="sample-modal-2" type="button">
                      <span class="icon"><i class="mdi mdi-check"></i></span>
                    </button>
                    <button class="button small red --jb-modal" data-target="sample-modal" type="button">
                      <span class="icon"><i class="mdi mdi-window-close"></i></span>
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
              <td class="check-cell">
                <div class="flex items-center">
                        <input id="checkbox-table-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-table-1" class="sr-only">checkbox</label>
                    </div>
                </td>
                <td data-label="Name">Riya Patel</td>
                <td data-label="Branch">IT</td>
                <td data-label="Email-Id">riyapatel@gmail.com</td>
                <td data-label="Batch">2023</td>

                <td data-label="Applied On">
                  <small class="text-gray-500" title="Oct 25, 2021">Oct 25, 2021</small>
                </td>
                <td class="actions-cell">
                  <div class="buttons right nowrap">
                  

                    <button class="button small green --jb-modal"  data-target="sample-modal-2" type="button">
                      <span class="icon"><i class="mdi mdi-check"></i></span>
                    </button>
                    <button class="button small red --jb-modal" data-target="sample-modal" type="button">
                      <span class="icon"><i class="mdi mdi-window-close"></i></span>
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
              <td class="check-cell">
                <div class="flex items-center">
                        <input id="checkbox-table-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-table-1" class="sr-only">checkbox</label>
                    </div>
                </td>
                <td data-label="Name">Riya Patel</td>
                <td data-label="Branch">IT</td>
                <td data-label="Email-Id">riyapatel@gmail.com</td>
                <td data-label="Batch">2023</td>

                <td data-label="Applied On">
                  <small class="text-gray-500" title="Oct 25, 2021">Oct 25, 2021</small>
                </td>
                <td class="actions-cell">
                  <div class="buttons right nowrap">
                  

                    <button class="button small green --jb-modal"  data-target="sample-modal-2" type="button">
                      <span class="icon"><i class="mdi mdi-check"></i></span>
                    </button>
                    <button class="button small red --jb-modal" data-target="sample-modal" type="button">
                      <span class="icon"><i class="mdi mdi-window-close"></i></span>
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
              <td class="check-cell">
                <div class="flex items-center">
                        <input id="checkbox-table-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-table-1" class="sr-only">checkbox</label>
                    </div>
                </td>
                <td data-label="Name">Riya Patel</td>
                <td data-label="Branch">IT</td>
                <td data-label="Email-Id">riyapatel@gmail.com</td>
                <td data-label="Batch">2023</td>

                <td data-label="Applied On">
                  <small class="text-gray-500" title="Oct 25, 2021">Oct 25, 2021</small>
                </td>
                <td class="actions-cell">
                  <div class="buttons right nowrap">
                  

                    <button class="button small green --jb-modal"  data-target="sample-modal-2" type="button">
                      <span class="icon"><i class="mdi mdi-check"></i></span>
                    </button>
                    <button class="button small red --jb-modal" data-target="sample-modal" type="button">
                      <span class="icon"><i class="mdi mdi-window-close"></i></span>
                    </button>
                  </div>
                </td>
              </tr>


              <tr>
              <td class="check-cell">
                <div class="flex items-center">
                        <input id="checkbox-table-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-table-1" class="sr-only">checkbox</label>
                    </div>
                </td>
                <td data-label="Name">Riya Patel</td>
                <td data-label="Branch">IT</td>
                <td data-label="Email-Id">riyapatel@gmail.com</td>
                <td data-label="Batch">2023</td>

                <td data-label="Applied On">
                  <small class="text-gray-500" title="Oct 25, 2021">Oct 25, 2021</small>
                </td>
                <td class="actions-cell">
                  <div class="buttons right nowrap">
                  

                    <button class="button small green --jb-modal"  data-target="sample-modal-2" type="button">
                      <span class="icon"><i class="mdi mdi-check"></i></span>
                    </button>
                    <button class="button small red --jb-modal" data-target="sample-modal" type="button">
                      <span class="icon"><i class="mdi mdi-window-close"></i></span>
                    </button>
                  </div>
                </td>
              </tr>





             
              </tbody>
            </table>
            <div class="buttons right nowrap">
              <div class="flex items-center justify-between">
                <div class="buttons">
                  <button type="button" class="button bg-sky-500 hover:bg-sky-700 ... ">Send Exam Link</button>
                  <button type="button" class="button ">Schedule Interview</button>
                  <button type="button" class="button">Send Offer Letter</button>
                </div>
               
              </div>
            </div>
            {/* <div class="table-pagination">
              <div class="flex items-center justify-between">
                <div class="buttons">
                  <button type="button" class="button active">1</button>
                  <button type="button" class="button">2</button>
                  <button type="button" class="button">3</button>
                </div>
                <small>Page 1 of 3</small>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    
    
    );
}
