// import { Button } from "@/components/ui/button"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DataTable } from "./data-table/data-table";
// import { request_dummy } from "@/pages/Dashboard/overview/dummy";
import { po_dummy } from "@/pages/Dashboard/po/po-dummy";
import { po_column } from "@/pages/Dashboard/po/columnDef";

// import { request_column_overview } from "@/pages/Dashboard/overview/columnDef";

// import { Card, CardContent } from "./ui/card";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export function OverviewTab()
{
      return (
            <Tabs defaultValue="po" className="w-full">
                  <TabsList className=" border-b w-full justify-start gap-6 bg-transparent">
                        <TabsTrigger className="" value="po">
                              Active Payment orders
                        </TabsTrigger>
                        <TabsTrigger value="invoice">Active Invoice</TabsTrigger>
                  </TabsList>
                  <TabsContent value="po" className="w-full h-auto">
                        <div className="p-6 border-none">
                              <div className="p-0">
                                    <DataTable
                                          data={po_dummy.slice(0,5)}
                                          columns={po_column}
                                          column_to_filter="fullName"
                                          placeholder="Search customers"
                                          emptyState={<EmptyPO />}
                                          show_toolbar={false}
                                          show_pagination={false}
                                    />
                              </div>

                              <div className="flex justify-end items-center mt-6">
                                    <p className="underline  text-gray-400 font-medium">
                                          <Link to="/">See more</Link>
                                    </p>
                              </div>
                        </div>
                  </TabsContent>
                  <TabsContent value="invoice">
                        <div className="p-6 border-none">
                              <div className="p-0">
                                    <DataTable
                                          ddata={po_dummy.slice(0,5)}
                                          columns={po_column}
                                          column_to_filter="fullName"
                                          placeholder="Search customers"
                                          emptyState={<EmptyInvoice />}
                                          show_toolbar={false}
                                          show_pagination={false}
                                    />
                              </div>

                              <div className="flex justify-end items-center mt-6">
                                    <p className="underline  text-gray-400 font-medium">
                                          <Link to="/">See more</Link>
                                    </p>
                              </div>
                        </div>
                  </TabsContent>
            </Tabs>
      );
}

export function EmptyPO()
{
      return <div className="w-full h-40 centered">
            <div className="space-y-3">
                  <h1 className="text-medium text-lg">There are no  Active Payment orders.</h1>
                  <Link to={"/dashboard/order/create"}>
                        <Button>Create  PO</Button>
                  </Link>
            </div>

      </div>;
}


export function EmptyInvoice()
{
      return <div className="w-full h-40 centered">
            <div className="space-y-3">
                  <h1 className="text-medium text-lg">There are no Invoices.</h1>
                  <Button>Create  Invoice</Button>
            </div>

      </div>;
}
