import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testng.keyword.TestNGBuiltinKeywords as TestNGKW
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows
import internal.GlobalVariable as GlobalVariable
import org.openqa.selenium.Keys as Keys

responseId = WS.sendRequest(findTestObject('Create a pet', [('baseUri') : GlobalVariable.baseUri]))

petId = WS.getElementPropertyValue(responseId, '_id')

println('I\'m looking for id: ' + petId)

GlobalVariable.petId = petId

println('Keep the id into global variable: ' + petId)

WS.sendRequest(findTestObject('Get a pet name by Id', [('baseUri') : GlobalVariable.baseUri, ('petId') : GlobalVariable.petId]))

WS.sendRequest(findTestObject('Update a pet name', [('baseUri') : GlobalVariable.baseUri, ('petId') : GlobalVariable.petId]))

WS.sendRequest(findTestObject('Get a pet name by Id', [('baseUri') : GlobalVariable.baseUri, ('petId') : GlobalVariable.petId]))

WS.sendRequest(findTestObject('Delete a pet', [('baseUri') : GlobalVariable.baseUri, ('petId') : GlobalVariable.petId]))

WS.sendRequest(findTestObject('List all pets', [('baseUri') : GlobalVariable.baseUri]))

