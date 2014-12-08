package service;

import java.io.IOException;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.util.HashMap;
import java.util.Random;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class RequestGeneratorServlet extends HttpServlet {

	HashMap<Integer, Integer> requestTimes = new HashMap<Integer, Integer>();
	HashMap<Integer, Double> cpus = new HashMap<Integer, Double>();
	HashMap<Integer, Double> hds = new HashMap<Integer, Double>();
	HashMap<Integer, Double> rams = new HashMap<Integer, Double>();
//	String server = "localhost";
	String server = "ubuntu-mc-1-cmpe281.cloudapp.net";
	String client  = "localhost";
	int noOfRequests = 99;
	
	public RequestGeneratorServlet() {
		// TODO Auto-generated constructor stub
		System.out.println("In constructor");
		requestTimes.put(1, 10);
		requestTimes.put(2, 20);
		requestTimes.put(3, 30);
		cpus.put(1, 0.01);
		cpus.put(2, 0.05);
		cpus.put(3, 0.08);
		hds.put(1, 0.01);
		hds.put(2, 0.02);
		hds.put(3, 0.03);
		rams.put(1, 0.01);
		rams.put(2, 0.05);
		rams.put(3, 0.10);
	}
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
		System.out.println("Inside doPost of RequestGenerator");
		
		int interval = Integer.parseInt(request.getParameter("interval"));
		int algorithm = Integer.parseInt(request.getParameter("algorithm"));
		
		//System.out.println("Interval: " + interval);
		//System.out.println("Algorithm: " + algorithm);
		
		Random random = new Random();
//		int sleep = interval * 60 *  1000;
		int sleep = interval * 60 *  100;
		sleep = sleep / noOfRequests;
		int[] counters = new int[requestTimes.size()];
		int i = 1;
		while(true) {
			int requestType = random.nextInt(requestTimes.size()) + 1;
	
			if(counters[requestType - 1] <= ( noOfRequests / requestTimes.size() )) {
				
				System.out.println("Sending request for :" + requestType + " : " + i);
				sendRequest(requestType, algorithm, requestTimes.get(requestType));
				try {
					Thread.sleep(sleep);
				} catch (InterruptedException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
				counters[requestType - 1]++;
				if(i==noOfRequests)
					break;
				i++;
			}
			
		}
	
		System.out.println("Exiting doPost of RequestGenerator");
		
	}
	
	public void sendRequest(int requestType, int algoIdentifier, int time) {
		
		//System.out.println("requestType: " + requestType);
		
		//System.out.println("algoIdentifier: " + algoIdentifier);
		
		//System.out.println("time: " + time);
		
		//System.out.println("sleep: " + sleep);
		
		String url = "http://"+server+":8080/LoadBalancer/request";
		String charset = "UTF-8";
		int status = 0;
		//Random randomCpu = new Random();
		//Random randomStorage = new Random();
		//Random randomRam = new Random();
		double cpu = 0.0, storage = 0.0, ram = 0.0, latitude = 0.0, longitude = 0.0; 
		
		// Calculate cpu
		//cpu = Math.round(randomCpu.nextDouble() * 10.0) / 100.00;
		cpu = cpus.get(requestType);
		//System.out.println("Cpu: " + cpu);
		
		// Calculate storage
		//storage = Math.round(randomStorage.nextDouble() * 5.0 * 10.0) / 100.0;
		storage = hds.get(requestType);
		//System.out.println("Storage: " + storage);
		
		// Calculate ram
		//ram =  Math.round(randomRam.nextDouble() * 2.0 * 10.0) / 100.0;
		ram = rams.get(requestType);
		//System.out.println("Ram: " + ram);
		latitude = randomDouble(14.385, 62.7475);
		longitude = randomDouble(-152.2683, -44.2085);
		latitude = randomDouble(14.2417, 61.3850);
		longitude = randomDouble(-170.7197, -71.5101);
		
		try {
			String query = String.format("cpu=%s&storage=%s&ram=%s&time=%s&algoIdentifier=%s&requestType=%s&latitude=%s&longitude=%s",
			URLEncoder.encode(String.valueOf(cpu), charset), 
			URLEncoder.encode(String.valueOf(storage), charset),
			URLEncoder.encode(String.valueOf(ram), charset),
			URLEncoder.encode(String.valueOf(time), charset),
			URLEncoder.encode(String.valueOf(algoIdentifier), charset),
			URLEncoder.encode(String.valueOf(requestType), charset),
			URLEncoder.encode(String.valueOf(latitude), charset),
			URLEncoder.encode(String.valueOf(longitude), charset));
			
			System.out.println(query);
			HttpURLConnection connection = (HttpURLConnection) new URL(url).openConnection();
			connection.setRequestMethod("POST");
			connection.setDoOutput(true); // Triggers POST.
			connection.setRequestProperty("Accept-Charset", charset);
			connection.setRequestProperty("Content-Type", "application/x-www-form-urlencoded;charset=" + charset);
			//connection.connect();
			try (OutputStream output = connection.getOutputStream()) {
			    output.write(query.getBytes(charset));
			    output.flush();
			    output.close();
			}

			status = connection.getResponseCode();
			
			System.out.println("This is the status from server: "+ status);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
			
	}
	
	public double randomDouble(double min, double max) {
		Random random = new Random();
		double randomDoubleValue = min + (max - min) * random.nextDouble();
		return randomDoubleValue;
		}
	
}
